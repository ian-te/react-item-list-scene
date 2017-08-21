import { UPDATE } from '../actions';
import { reducer } from '../reducer';

describe('Search string data reducer', () => {
    it('should initiate', () => {
        const initialState = {
            name: ''
        }
        expect(reducer(undefined, {}), {}).toEqual(initialState)
    })
    it('should update a search string in a state', () => {
        const payload = {
            name: 'Fluffykins'
        };
        const stateAfter = payload;
        expect(reducer(
            undefined,
            {
                type: UPDATE,
                payload
            }
        )).toEqual(stateAfter)
    })
})