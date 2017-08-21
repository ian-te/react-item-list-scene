import { fork } from 'redux-saga/effects';
import dataSaga from './data/saga';
export default function* root() {
    yield [
        fork(dataSaga)
    ];
}