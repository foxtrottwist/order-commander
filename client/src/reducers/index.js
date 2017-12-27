import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import inventoryLists from './inventoryListsReducer';
import authenticated from './authenticatedReducer';

export default combineReducers({
  form,
  inventoryLists,
  authenticated
});
