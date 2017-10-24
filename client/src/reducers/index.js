import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import inventoryListReducer from './inventoryListReducer';

export default combineReducers({
  form: reduxForm,
  list: inventoryListReducer
});
