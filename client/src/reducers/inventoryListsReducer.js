import { FETCH_INVENTORY_LISTS, DELETE_INVENTORY_LIST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INVENTORY_LISTS:
      return action.payload;

    case DELETE_INVENTORY_LIST:
      return action.payload;

    default:
      return state;
  }
}
