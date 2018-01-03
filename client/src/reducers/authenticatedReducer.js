import { LOGIN, LOGOUT, NOT_AUTHORIZED } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case LOGIN:
      return true;

    case LOGOUT:
      return false;

    case NOT_AUTHORIZED:
      return false;

    default:
      return state;
  }
}
