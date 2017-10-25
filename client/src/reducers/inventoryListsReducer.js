import { FETCH_INVENTORY_LISTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INVENTORY_LISTS:
      return action.payload;
    default:
      return state;
  }
}
