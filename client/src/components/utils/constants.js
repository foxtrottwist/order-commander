const INVENTORY_FIELDS = [
  {
    label: 'Categories',
    name: 'title',
    errorMessage: 'You must select a title for your list'
  },
  {
    label: 'Items',
    name: 'list',
    errorMessage: 'You must provide at least one item for your list'
  }
];

const LOGIN_FIELDS = [
  { label: 'Email', name: 'email' },
  { label: 'Password', name: 'password' }
];

const INVENTORY_TITLES = [
  { value: 'APPLES', title: 'APPLES' },
  { value: 'AVO / TOM', title: 'AVO / TOM' },
  { value: 'BERRIS / GRAPES', title: 'BERRIS / GRAPES' },
  { value: 'CARROTS', title: 'CARROTS' },
  { value: 'CELLO SET', title: 'CELLO SET' },
  { value: 'CIDER', title: 'CIDER' },
  { value: 'CITRUS / PEAR', title: 'CITRUS / PEAR' },
  { value: 'DELI PRODUCE', title: 'DELI PRODUCE' },
  { value: 'HARD VEDGE / ETHNIC', title: 'HARD VEDGE / ETHNIC' },
  { value: 'MUSHROOM / HERB', title: 'MUSHROOM / HERB' },
  { value: 'POTATO / ONION', title: 'POTATO / ONION' },
  { value: 'PRODUCTION', title: 'PRODUCTION' },
  { value: 'SALADS', title: 'SALADS' },
  { value: 'STONE FRUIT', title: 'STONE FRUIT' },
  { value: 'SUPPLY', title: 'SUPPLY' },
  { value: 'TROPICAL', title: 'TROPICAL' },
  { value: 'VEG TABLE', title: 'VEG TABLE' },
  { value: 'WET WALL', title: 'WET WALL' }
];

export { INVENTORY_FIELDS, LOGIN_FIELDS, INVENTORY_TITLES };
