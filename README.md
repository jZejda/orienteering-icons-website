# Orienteering Icons Website

Vue showcase for 116 IOF Control Descriptions pictograms in 12 categories.
The existing design and root URL are retained. Four corrected IOF 2024 drawings
are the default; their legacy IDs remain available in the downloaded sprite.

## Develop and verify

Use Node.js 20.19+ or 22.12+ as required by the installed Vite version.

```sh
npm ci
npm run dev
npm run test -- --run
npm run build
npm run preview
```

`npm run deploy` is a separate, manual deployment command. The build and tests
do not invoke it.

## Update the icon library

The sprite, individual SVGs and catalog are checked into this repository so a
website build never depends on a sibling checkout or a network request. Source
revision and SHA-256 checksums are recorded in `src/data/icon-source.json`.

To import another reviewed library commit:

```sh
python3 scripts/sync-icons.py --repository ../orienteering-icons --revision FULL_COMMIT_SHA
npm run test -- --run
npm run build
```

The default pinned revision is `b584580c4534ea59f1e4f3f3b2c9841d8790cc4a`.
The script exports that Git revision into a temporary directory and uses the
library's own validator/build. Uncommitted library changes cannot leak into the
website. `src/data/icon-labels.json` provides presentation copy; the actual icon
inventory, IOF references, aliases and geometry come from the generated catalog.

`public/iofico.svg` retains the existing website URL.
`public/ioficons-sprite.svg` is the equivalent canonical download. Individual
downloads are under `public/icons/`. License and provenance information are
included as `ICONS-LICENSE.txt` and `ICONS-NOTICE.txt`.

Only standalone icons appear in the grid. Wide route templates and dynamic
numeric dimensions remain separate representations in the source catalog.

## Browser verification

With Playwright and Chromium available in the test environment, run:

```sh
IOF_PREVIEW_URL=http://127.0.0.1:8081/ node tests/browser-check.cjs
```

The browser check requires Playwright; set `IOF_CHROME` to an existing Chrome
executable if Chromium was not installed by Playwright. It verifies all rendered
icons, category counts, alias/reference searches, clipboard actions, individual
and sprite downloads, dark mode, mobile layout and routing. Screenshots and
results are written to the ignored `output/browser/` directory.
