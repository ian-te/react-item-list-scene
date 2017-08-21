import { fork } from 'redux-saga/effects';
import listSaga from './list/saga';
import searchSaga from './search/saga';
export default function* root() {
    yield [
        fork(listSaga),
        fork(searchSaga)
    ];
}