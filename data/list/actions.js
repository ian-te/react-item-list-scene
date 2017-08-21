export const REQUEST = 'ItemList/data/list/REQUEST';
export const SUCCESS = 'ItemList/data/list/SUCCESS';
export const ERROR = 'ItemList/data/list/ERROR';

export const request = payload => ({
    type: REQUEST, payload
});

export const success = payload => ({
    type: SUCCESS, payload
});

export const error = payload => ({
    type: ERROR, payload
});
