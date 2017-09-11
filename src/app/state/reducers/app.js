import { REGISTER_ACCOUNT, LOG_INTO_ACCOUNT } from '../actions/action-types';

const INITIAL_STATE = {
  registered: false,
  isLoggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_ACCOUNT.SUCCESS:
      return {
        ...state,
        registered: true,
      };
    case LOG_INTO_ACCOUNT.SUCCESS:
      debugger;
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};
