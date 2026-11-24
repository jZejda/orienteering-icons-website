#!/usr/bin/env python3
"""Vendor a reproducible icon build from a pinned local Git revision."""
import argparse
import hashlib
import io
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tarfile
import tempfile

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_REVISION = 'b584580c4534ea59f1e4f3f3b2c9841d8790cc4a'


def sync(repository, revision):
    commit = subprocess.check_output(['git', '-C', str(repository), 'rev-parse', '--verify', revision + '^{commit}'], text=True).strip()
    archive = subprocess.check_output(['git', '-C', str(repository), 'archive', '--format=tar', commit])
    with tempfile.TemporaryDirectory(prefix='iof-catalog-build-') as folder:
        checkout = Path(folder)
        with tarfile.open(fileobj=io.BytesIO(archive)) as tar:
            for member in tar.getmembers():
                name = Path(member.name)
                if name.is_absolute() or '..' in name.parts:
                    raise ValueError('Invalid source archive path')
                if member.isfile():
                    target = checkout / name
                    target.parent.mkdir(parents=True, exist_ok=True)
                    target.write_bytes(tar.extractfile(member).read())
        subprocess.run([sys.executable, 'tools/build.py'], cwd=checkout, check=True)
        build = checkout / 'dist'
        public = ROOT / 'public'
        data = ROOT / 'src/data'
        public.mkdir(exist_ok=True)
        data.mkdir(parents=True, exist_ok=True)
        payload = (build / 'ioficons-sprite.svg').read_bytes()
        for filename in ['iofico.svg', 'ioficons-sprite.svg']:
            (public / filename).write_bytes(payload)
        shutil.copytree(build / 'icons', public / 'icons', dirs_exist_ok=True)
        shutil.copyfile(build / 'catalog.json', data / 'iof-catalog.json')
        shutil.copyfile(build / 'NOTICE', public / 'ICONS-NOTICE.txt')
        shutil.copyfile(build / 'LICENSE', public / 'ICONS-LICENSE.txt')
        metadata = {
            'repository': 'https://github.com/jZejda/orienteering-icons',
            'revision': commit,
            'spriteSha256': hashlib.sha256(payload).hexdigest(),
            'catalogSha256': hashlib.sha256((data / 'iof-catalog.json').read_bytes()).hexdigest(),
        }
        (data / 'icon-source.json').write_text(json.dumps(metadata, indent=2) + '\n')
        shutil.copyfile(build / 'ioficons-sprite.svg', ROOT / 'src/assets/iofico.svg')
    return metadata


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--repository', type=Path, required=True)
    parser.add_argument('--revision', default=DEFAULT_REVISION)
    args = parser.parse_args()
    print(json.dumps(sync(args.repository, args.revision), indent=2))
