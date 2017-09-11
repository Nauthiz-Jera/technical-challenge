import { LOGIN_STATUS } from './action-types';

export const loginStatus = status => ({
  type: LOGIN_STATUS,
  payload: status,
});
