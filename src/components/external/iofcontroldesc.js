import catalog from '../../data/iof-catalog.json'
import labels from '../../data/icon-labels.json'
import { CATEGORY_DEFINITIONS, createIconCatalog } from './catalog.js'

export const SPRITE_URL = `${import.meta.env.BASE_URL}iofico.svg`
export const SPRITE_DOWNLOAD_URL = `${import.meta.env.BASE_URL}ioficons-sprite.svg`
export const CATEGORIES = [
  { id: 'all', label: 'All' },
  ...CATEGORY_DEFINITIONS.map(({ id, label }) => ({ id, label })),
]

export default createIconCatalog(catalog, labels)
