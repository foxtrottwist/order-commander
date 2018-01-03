import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  NOT_AUTHORIZED,
  CREATE_USER,
  FETCH_USERS,
  CREATE_INVENTORY_LIST,
  FETCH_INVENTORY_LISTS,
  DELETE_INVENTORY_LIST
} from './types';

// Authentication errors could be handle with an HOC instead of in each individual action
const authError = 'Request failed with status code 401';

// Authentication actions
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

// User creation actions
export const createUser = (values, history) => async dispatch => {
  try {
    await axios.post('/api/users', values);

    history.push('/dashboard');

    dispatch({ type: CREATE_USER });
  } catch (error) {
    if (error.message === authError) {
      history.push('/login');

      dispatch({ type: NOT_AUTHORIZED });
    }
  }
};

export const fetchUsers = history => async dispatch => {
  try {
    const res = await axios.get('/api/users');

    dispatch({ type: FETCH_USERS, payload: res.data });
  } catch (error) {
    if (error.message === authError) {
      history.push('/login');

      dispatch({ type: NOT_AUTHORIZED });
    }
  }
};

// Inventory List actions
export const createList = (values, history) => async dispatch => {
  try {
    await axios.post('/api/inventory_lists', values);

    history.push('/dashboard');

    dispatch({ type: CREATE_INVENTORY_LIST });
  } catch (error) {
    if (error.message === authError) {
      history.push('/login');

      dispatch({ type: NOT_AUTHORIZED });
    }
  }
};

export const fetchInventoryLists = history => async dispatch => {
  try {
    const res = await axios.get('api/inventory_lists');

    dispatch({ type: FETCH_INVENTORY_LISTS, payload: res.data });
  } catch (error) {
    if (error.message === authError) {
      history.push('/login');

      dispatch({ type: NOT_AUTHORIZED });
    }
  }
};

export const deleteInventoryList = (_id, history) => async dispatch => {
  try {
    const res = await axios.post('/api/delete_lists', { _id });

    dispatch({ type: DELETE_INVENTORY_LIST, payload: res.data });
  } catch (error) {
    if (error.message === authError) {
      history.push('/login');

      dispatch({ type: NOT_AUTHORIZED });
    }
  }
};
