export const CATEGORY_DEFINITIONS = [
  { id: 'position', label: 'Position', sources: ['which-feature'] },
  { id: 'landforms', label: 'Landforms', sources: ['landforms'] },
  { id: 'rock', label: 'Rock & Stone', sources: ['rock-and-boulders'] },
  { id: 'water', label: 'Water & Marsh', sources: ['water-and-marsh'] },
  { id: 'vegetation', label: 'Vegetation', sources: ['vegetation'] },
  { id: 'man-made', label: 'Man-made Features', sources: ['man-made'] },
  { id: 'special', label: 'Special Items', sources: ['special-items'] },
  { id: 'appearance', label: 'Appearance', sources: ['appearance'] },
  { id: 'combinations', label: 'Combinations & Bend', sources: ['combinations', 'bend'] },
  { id: 'flag-location', label: 'Flag Location', sources: ['flag-location'] },
  { id: 'other', label: 'Other Information', sources: ['other-information'] },
  { id: 'instructions', label: 'Instructions', sources: ['special-instructions'] },
]

const directionNames = {
  northern: 'Northern', 'north-eastern': 'North Eastern', eastern: 'Eastern',
  'south-eastern': 'South Eastern', southern: 'Southern', 'south-western': 'South Western',
  western: 'Western', 'north-western': 'North Western',
}

export function createIconCatalog(catalog, labels) {
  const result = []
  for (const [reference, entry] of Object.entries(catalog.entries)) {
    const category = CATEGORY_DEFINITIONS.find(c => c.sources.includes(entry.category))
    const base = entry.representations.filter(r => r.type === 'icon' && !r.variant)
    if (!base.length) continue
    if (!category || !labels[reference]) throw new Error(`Missing catalog label/category: ${reference}`)
    for (const original of base) {
      const drawing = entry.representations.find(r => r.type === 'icon' && r.variant === 'iof-2024' && r.legacyId === original.id) || original
      const aliases = catalog.aliases.filter(a => a.target === original.id).map(a => a.id)
      const canonical = aliases.includes('minor-water-channel') ? 'minor-water-channel' : drawing.symbolId
      result.push({
        id: original.id,
        sprite: canonical,
        name: directionNames[original.id] || labels[reference].name,
        long: directionNames[original.id]
          ? `Selects the ${directionNames[original.id].toLowerCase()} feature among similar nearby features.`
          : labels[reference].description,
        category: category.id,
        iof: reference,
        column: entry.primaryColumn,
        direction: drawing.baseDirection || null,
        aliases: [...new Set([original.id, drawing.symbolId, ...aliases])],
        legacySprite: drawing !== original ? original.symbolId : null,
        file: `icons/${canonical}.svg`,
      })
    }
  }
  const directionOrder = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']
  const positionRank = icon => icon.direction
    ? directionOrder.indexOf(icon.direction)
    : 8 + Number(icon.iof.split('.')[1])
  const position = result.filter(icon => icon.category === 'position').sort((a, b) => positionRank(a) - positionRank(b))
  return [...position, ...result.filter(icon => icon.category !== 'position')]
}

export function matchesIcon(icon, query) {
  const words = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean)
  const text = [icon.name, icon.sprite, icon.long, icon.iof, ...icon.aliases].join(' ').toLocaleLowerCase()
  return words.every(word => text.includes(word))
}
