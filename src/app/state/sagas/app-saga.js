import API from '../../api/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  registerAccountSuccess,
  registerAccountFail,
  loginAccountSuccess,
  loginAccountFail,
} from '../actions/app';
import { REGISTER_ACCOUNT, LOG_INTO_ACCOUNT } from '../actions/action-types';

export function* registerAccount(action) {
  try {
    const { registryInfo } = action.payload;
    const result = yield call(API.registerAccount, registryInfo);
    yield put(registerAccountSuccess(result));
  } catch (error) {
    yield put(registerAccountFail(error));
  }
}

export function* logIntoAccount(action) {
  try {
    const { loginInfo } = action.payload;
    const result = yield call(API.logIntoAccount, loginInfo);
    yield put(loginAccountSuccess(result));
  } catch (error) {
    yield put(loginAccountFail(error));
  }
}

export function* watchRegisterAccount() {
  yield takeLatest(REGISTER_ACCOUNT.REQUESTED, registerAccount);
}

export function* watchLogIntoAccount() {
  yield takeLatest(LOG_INTO_ACCOUNT.REQUESTED, logIntoAccount);
}
