const createAsyncActionType = action => ({
  SUCCESS: `${action}-success`,
  ERROR: `${action}-error`,
  REQUESTED: `${action}-requested`,
});
export const LOGIN_STATUS = 'login_status';
export const REGISTER_ACCOUNT = createAsyncActionType('register_account');
export const LOG_INTO_ACCOUNT = createAsyncActionType('log_into_account');
