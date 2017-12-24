import axios from 'axios';

import { CREATE_INVENTORY_LIST, FETCH_INVENTORY_LISTS, LOGIN } from './types';

export const login = (values, history) => async dispatch => {
  const res = await axios.post('/api/login', values);

  history.push('/inventory-lists');

  dispatch({ type: LOGIN, payload: res.data });
};

export const createList = (values, history) => async dispatch => {
  const res = await axios.post('/api/inventory_lists', values);

  history.push('/inventory-lists');

  dispatch({ type: CREATE_INVENTORY_LIST, payload: res.data });
};

export const fetchInventoryLists = () => async dispatch => {
  const res = await axios.get('api/inventory_lists');

  dispatch({ type: FETCH_INVENTORY_LISTS, payload: res.data });
};
