import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import users from './userReducer';
import inventoryLists from './inventoryListsReducer';
import authenticated from './authenticatedReducer';

export default combineReducers({
  form,
  users,
  inventoryLists,
  authenticated
});
