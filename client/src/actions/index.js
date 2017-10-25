import axios from 'axios';

import { CREATE_INVENTORY_LIST, FETCH_INVENTORY_LISTS } from './types';

export const createList = (values, history) => async dispatch => {
  const res = await axios.post('/api/inventory_lists', values);

  history.push('/take-inventory');

  dispatch({ type: CREATE_INVENTORY_LIST, payload: res.data });
};

export const fetchInventoryLists = () => async dispatch => {
  const res = await axios.get('api/inventory_lists');

  dispatch({ type: FETCH_INVENTORY_LISTS, payload: res.data });
};
