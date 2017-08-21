import { UPDATE } from './actions';

const initialState = {
    name: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE:
            return {
                ...state, ...action.payload
            }
        default: 
            return state;
    }
}