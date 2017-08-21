import { call, put, takeLatest, select } from 'redux-saga/effects';
import ItemListApi from '../../api.js';
import { REQUEST, success, error } from './actions';
import { request as requestNaming } from 'data/naming/actions';

const getNamingIds = itemList =>
    itemList.reduce((accumulator, item) => [
        ...new Set([...accumulator, ...item.naming])
    ], []);

const getRulesFromState = state => state.data.naming.rules

const namingUpdateRequired = () => {}

function* fetchItemList(action) {
    try {
        const itemList = yield call(ItemListApi.getAllItems, action.payload);
        yield put(success(itemList));
        yield put(requestNaming(getNamingIds(itemList)));
    } catch (e) {
        yield put(error(e));
    }
}

function* listSaga() {
    yield takeLatest([REQUEST], fetchItemList);
}

export default listSaga;
