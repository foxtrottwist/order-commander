import { CREATE_INVENTORY_LIST } from '../actions/types';

export default function(state = '', action) {
  switch (action.type) {
    case CREATE_INVENTORY_LIST:
      return action.payload;
    default:
      return state;
  }
}
