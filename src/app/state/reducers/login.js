import { LOGIN_STATUS } from '../actions/action-types';

const INITIAL_STATE = {
  loggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Action case':
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};
