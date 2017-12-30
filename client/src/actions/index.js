import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  CREATE_USER,
  FETCH_USERS,
  CREATE_INVENTORY_LIST,
  FETCH_INVENTORY_LISTS
} from './types';

export const login = (values, history) => async dispatch => {
  await axios.post('/api/login', values);

  history.push('/dashboard');

  dispatch({ type: LOGIN });
};

export const logout = history => async dispatch => {
  await axios.get('/api/logout');

  history.push('/');

  dispatch({ type: LOGOUT });
};

export const createUser = (values, history) => async dispatch => {
  await axios.post('/api/users', values);

  history.push('/dashboard');

  dispatch({ type: CREATE_USER });
};

export const fetchUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users');

    dispatch({ type: FETCH_USERS, payload: res.data });
  } catch (error) {
    // ignoring for now, fix
  }
};

export const createList = (values, history) => async dispatch => {
  await axios.post('/api/inventory_lists', values);

  history.push('/dashboard');

  dispatch({ type: CREATE_INVENTORY_LIST });
};

export const fetchInventoryLists = history => async dispatch => {
  try {
    const res = await axios.get('api/inventory_lists');

    dispatch({ type: FETCH_INVENTORY_LISTS, payload: res.data });
  } catch (error) {
    if (error.message === 'Request failed with status code 401') {
      history.push('/login');
    }
  }
};
