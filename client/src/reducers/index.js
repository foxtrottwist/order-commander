import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import createInventoryList from './createInventoryListReducer';
import inventoryLists from './inventoryListsReducer';

export default combineReducers({
  form: reduxForm,
  listStatus: createInventoryList,
  lists: inventoryLists
});
