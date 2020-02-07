/* @flow */

import { fork, all } from 'redux-saga/effects';

import filmsSaga from 'containers/Films/saga';

function* rootSaga() {
  yield all([fork(filmsSaga)]);
}

export default rootSaga;
