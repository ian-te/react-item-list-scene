import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UPDATE } from '../search/actions';
import { request } from '../list/actions';

function* searchUpdate(action) {
    yield call(delay, 200);
    yield put(request(action.payload));
}

function* searchSaga() {
    yield takeLatest([UPDATE], searchUpdate);
}

export default searchSaga;
