import { REGISTER_ACCOUNT, LOG_INTO_ACCOUNT } from './action-types';

export const registerAccountSuccess = payload => ({
  type: REGISTER_ACCOUNT.SUCCESS,
  payload,
});

export const registerAccountFail = error => ({
  type: REGISTER_ACCOUNT.ERROR,
  error,
});

export const registerAccount = registryInfo => ({
  type: REGISTER_ACCOUNT.REQUESTED,
  payload: {
    registryInfo,
  },
});
export const loginAccountSuccess = payload => ({
  type: LOG_INTO_ACCOUNT.SUCCESS,
  payload,
});

export const loginAccountFail = error => ({
  type: LOG_INTO_ACCOUNT.ERROR,
  error,
});

export const loginAccount = loginInfo => ({
  type: LOG_INTO_ACCOUNT.REQUESTED,
  payload: {
    loginInfo,
  },
});
