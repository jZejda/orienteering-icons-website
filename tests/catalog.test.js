import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import { createIconCatalog, CATEGORY_DEFINITIONS, matchesIcon } from '../src/components/external/catalog.js'

const read = name => JSON.parse(readFileSync(resolve('src/data', name), 'utf8'))
const source = read('icon-source.json')
const catalog = read('iof-catalog.json')
const icons = createIconCatalog(catalog, read('icon-labels.json'))
const sprite = readFileSync('public/iofico.svg', 'utf8')

describe('versioned IOF website catalog', () => {
  it('shows all 116 base icons once in 12 categories', () => {
    expect(icons).toHaveLength(116)
    expect(new Set(icons.map(icon => icon.id)).size).toBe(116)
    expect(new Set(icons.map(icon => icon.sprite)).size).toBe(116)
    expect(new Set(icons.map(icon => icon.category)).size).toBe(CATEGORY_DEFINITIONS.length)
    expect(icons.every(icon => icon.name && icon.long && icon.iof)).toBe(true)
    expect(icons.slice(0, 8).map(icon => icon.direction)).toEqual(['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'])
  })

  it('selects corrected legacy drawings while keeping the old IDs available', () => {
    for (const id of ['boulder', 'boulder-field', 'rock-pillar', 'knoll']) {
      const icon = icons.find(icon => icon.id === id)
      expect(icon.sprite).toBe(`${id}-iof-2024`)
      expect(icon.legacySprite).toBe(id)
      expect(sprite).toContain(`id="${id}"`)
      expect(sprite).toContain(`id="${icon.sprite}"`)
    }
  })

  it('searches names, descriptions, IOF references and compatibility aliases', () => {
    const ditch = icons.find(icon => icon.id === 'minor-wather-channel')
    expect(ditch.sprite).toBe('minor-water-channel')
    expect(matchesIcon(ditch, 'minor-wather-channel')).toBe(true)
    expect(matchesIcon(ditch, 'minor-water-channel')).toBe(true)
    expect(icons.filter(icon => matchesIcon(icon, '5.24'))[0].id).toBe('railway')
    expect(matchesIcon(ditch, 'channel water')).toBe(true)
  })

  it('has real SVG downloads and symbols for every displayed icon', () => {
    for (const icon of icons) {
      expect(sprite, icon.sprite).toContain(`id="${icon.sprite}"`)
      expect(existsSync(resolve('public', icon.file)), icon.file).toBe(true)
      const content = readFileSync(resolve('public', icon.file), 'utf8')
      expect(content).toContain('viewBox="0 0 24 24"')
      expect(content).not.toMatch(/fill="(?:white|solid)"/)
    }
  })

  it('keeps the generated sprite and catalog pinned to the same revision', () => {
    const sha = value => createHash('sha256').update(value).digest('hex')
    expect(source.revision).toBe('b584580c4534ea59f1e4f3f3b2c9841d8790cc4a')
    expect(sha(readFileSync('public/iofico.svg'))).toBe(source.spriteSha256)
    expect(sha(readFileSync('src/data/iof-catalog.json'))).toBe(source.catalogSha256)
    expect(readFileSync('public/ioficons-sprite.svg')).toEqual(readFileSync('public/iofico.svg'))
  })

  it('excludes wide route templates and numeric layouts from the icon grid', () => {
    expect(icons.some(icon => icon.sprite.startsWith('template-'))).toBe(false)
    expect(icons.some(icon => icon.iof.startsWith('9.'))).toBe(false)
    expect(icons.filter(icon => icon.iof === '15.6')).toHaveLength(1)
    expect(catalog.entries['15.6'].representations).toHaveLength(2)
  })
})
