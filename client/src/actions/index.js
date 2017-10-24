import axios from 'axios';

import { CREATE_INVENTORY_LIST } from './types';

export const createList = (values, history) => async dispatch => {
  await axios.post('/api/inventory_lists', values);

  history.push('/take-inventory');

  dispatch({ type: CREATE_INVENTORY_LIST, payload: 'Sucess!' });
};
