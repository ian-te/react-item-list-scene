import { combineReducers } from 'redux';

import { reducer as searchReducer } from './search/reducer';
import { reducer as listReducer } from './list/reducer';

export const reducer = combineReducers({
    search: searchReducer,
    list: listReducer
})
