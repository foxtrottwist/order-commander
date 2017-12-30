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
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    errorMessage: 'Please provide your email'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    errorMessage: 'Please provide your password'
  }
];

const USER_FIELDS = [
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    errorMessage: 'You must provide an email'
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    errorMessage: 'You must provide a password'
  },
  {
    label: 'Confirm Password',
    name: 'confirm',
    type: 'password',
    errorMessage: 'Please confirm password'
  },
  { label: 'Admin', name: 'isAdmin', type: 'checkbox' }
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

export { INVENTORY_FIELDS, LOGIN_FIELDS, USER_FIELDS, INVENTORY_TITLES };
