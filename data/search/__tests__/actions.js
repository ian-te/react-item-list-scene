import * as actions from '../actions';

describe ('Search string', () => {
    it('should dispatch an action to update search string', () => {
        const payload = { name: 'Fluffikins' };
        const expectedAction = {
            type: actions.UPDATE,
            payload
        }
        expect(actions.update(payload)).toEqual(expectedAction)
    })
})