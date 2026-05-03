export const CATEGORIES = [
  { id: 'all',       label: 'All' },
  { id: 'position',  label: 'Position' },
  { id: 'landforms', label: 'Landforms' },
  { id: 'rock',      label: 'Rock & Stone' },
]

export default [
  // Position
  { name: 'Northern',      sprite: 'northern',      category: 'position',  long: 'The more northern of two similar features, or the northern-most of several similar features.' },
  { name: 'North Eastern', sprite: 'north-eastern',  category: 'position',  long: 'The more north-eastern of two similar features, or the north-eastern-most of several similar features.' },
  { name: 'Eastern',       sprite: 'eastern',        category: 'position',  long: 'The more eastern of two similar features, or the eastern-most of several similar features.' },
  { name: 'South Eastern', sprite: 'south-eastern',  category: 'position',  long: 'The more south-eastern of two similar features, or the south-eastern-most of several similar features.' },
  { name: 'Southern',      sprite: 'southern',       category: 'position',  long: 'The more southern of two similar features, or the southern-most of several similar features.' },
  { name: 'South Western', sprite: 'south-western',  category: 'position',  long: 'The more south-western of two similar features, or the south-western-most of several similar features.' },
  { name: 'Western',       sprite: 'western',        category: 'position',  long: 'The more western of two similar features, or the western-most of several similar features.' },
  { name: 'North Western', sprite: 'north-western',  category: 'position',  long: 'The more north-western of two similar features, or the north-western-most of several similar features.' },
  { name: 'Upper',         sprite: 'upper',          category: 'position',  long: 'Where the control feature is directly above a similar feature.' },
  { name: 'Lower',         sprite: 'lower',          category: 'position',  long: 'Where the control feature is directly below a similar feature.' },
  { name: 'Middle',        sprite: 'middle',         category: 'position',  long: 'Where the control feature is the middle one of a number of similar features.' },

  // Landforms
  { name: 'Terrace',            sprite: 'terrace',            category: 'landforms', long: 'A level area on a slope.' },
  { name: 'Spur',               sprite: 'spur',               category: 'landforms', long: 'A contour projection or "nose" rising from the surrounding ground.' },
  { name: 'Re-entrant',         sprite: 're-entrant',         category: 'landforms', long: 'A contour indentation; a valley; the opposite of a spur.' },
  { name: 'Earth Bank',         sprite: 'earth-bank',         category: 'landforms', long: 'An abrupt change in ground level which can clearly be distinguished from its surroundings.' },
  { name: 'Quarry',             sprite: 'quarry',             category: 'landforms', long: 'Gravel, sand or stone working in flat or inclined ground.' },
  { name: 'Earth Wall',         sprite: 'earth-wall',         category: 'landforms', long: 'A narrow wall of earth projecting above the surrounding terrain, may be partially stone-faced, usually man-made.' },
  { name: 'Erosion Gully',      sprite: 'erosion-gully',      category: 'landforms', long: 'An erosion gully or trench, normally dry.' },
  { name: 'Small Erosion Gully',sprite: 'small-erosion-gully',category: 'landforms', long: 'A small erosion gully or trench, normally dry.' },
  { name: 'Hill',               sprite: 'hill',               category: 'landforms', long: 'A high point. Shown on the map with contour lines.' },
  { name: 'Knoll',              sprite: 'knoll',              category: 'landforms', long: 'A small obvious mound.' },
  { name: 'Saddle',             sprite: 'saddle',             category: 'landforms', long: 'The low point between two higher points.' },
  { name: 'Depression',         sprite: 'depression',         category: 'landforms', long: 'A depression or hollow from which the ground rises on all sides. Shown on the map with contour lines.' },
  { name: 'Small Depression',   sprite: 'small-depression',   category: 'landforms', long: 'A small, shallow, natural depression or hollow.' },
  { name: 'Pit',                sprite: 'pit',                category: 'landforms', long: 'A pit or hole with distinct steep sides. Usually man-made.' },
  { name: 'Broken Ground',      sprite: 'broken-ground',      category: 'landforms', long: 'Clearly disturbed ground with features too small or too numerous to be mapped individually.' },
  { name: 'Ant Hill',           sprite: 'ant-hill',           category: 'landforms', long: 'The mound made by ants or termites.' },

  // Rock & Stone
  { name: 'Cliff, Crag',    sprite: 'cliff-crag',      category: 'rock', long: 'A cliff or rock face. May be passable or impassable.' },
  { name: 'Rock Pillar',    sprite: 'rock-pillar',     category: 'rock', long: 'A high, natural rock projection.', fill: true },
  { name: 'Cave',           sprite: 'cave',            category: 'rock', long: 'A hole in a rock face or hill side, often leading to underground workings.' },
  { name: 'Boulder',        sprite: 'boulder',         category: 'rock', long: 'A prominent free-standing block of rock or stone.', fill: true },
  { name: 'Boulder Field',  sprite: 'boulder-field',   category: 'rock', long: 'An area covered with so many boulders that they cannot be mapped individually.', fill: true },
  { name: 'Boulder Cluster',sprite: 'boulder-cluster', category: 'rock', long: 'A small area with several boulders.' },
  { name: 'Stony Ground',   sprite: 'stony-ground',   category: 'rock', long: 'An area covered with many small stones or rocks.' },
  { name: 'Narrow Passage', sprite: 'narrow-passage',  category: 'rock', long: 'A gap between two cliffs or rock faces that face each other.' },
  { name: 'Trench',         sprite: 'trench',          category: 'rock', long: 'A rocky or artificial trench.' },
]
