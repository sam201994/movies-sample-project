/**
 * Films Sagas
 */

import { put, takeLatest, all, call } from 'redux-saga/effects';
import request from 'utils/request';
import FilmsActions from './actions';

export function* handleLoadFilmsData(action) {
  const { location } = action.payload;
  if (location.pathname === '/films' || location.pathname === '/') {
    const requestURL = `https://andywiranata-42555.firebaseio.com/test-frontend/items.json`;
    try {
      // Call our request helper (see 'utils/request')
      const films = yield call(request, requestURL);
      yield put(FilmsActions.filmsDataLoaded(films));
    } catch (err) {
      console.log('error');
    }
  }
}

function* filmsSaga() {
  yield all([
    yield takeLatest('@@router/LOCATION_CHANGE', handleLoadFilmsData),
  ]);
}

export default filmsSaga;
