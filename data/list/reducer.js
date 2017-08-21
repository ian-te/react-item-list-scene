import { REQUEST, SUCCESS, ERROR } from './actions';

const initialState = {
    items: [],
    status: {
        loading: false,
        error: false
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                status: { error: false, loading: true }
            };
        case ERROR:
            return {
                ...state,
                status: { error: true, loading: false }
            };
        case SUCCESS:
            return {
                ...state,
                status: { error: false, loading: false },
                items: action.payload
            };
        default:
            return state;
    }
};
