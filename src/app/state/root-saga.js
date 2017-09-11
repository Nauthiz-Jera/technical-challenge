import { spawn, all } from 'redux-saga/effects';
import { watchRegisterAccount, watchLogIntoAccount } from './sagas/app-saga';

function* rootSaga() {
  yield all([spawn(watchRegisterAccount), spawn(watchLogIntoAccount)]);
}

export default rootSaga;
