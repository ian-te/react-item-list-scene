import * as actions from '../actions';

describe('Item List', () => {
    it('should dispatch an action to load item list on success', () => {
        const payload = [{ name: 'Fluffikins Item' }]
        const expectedAction = {
            type: actions.SUCCESS,
            payload
        }
        expect(actions.success(payload)).toEqual(expectedAction)
    })
})
