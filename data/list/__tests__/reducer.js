import * as actions from '../actions';
import { reducer } from '../reducer';

describe('Update List', () => {
    it('should initiate', () => {
        const initialState = {
            items: [],
            "status": {"error": false, "loading": false}
        }
        expect(reducer(undefined, {}), {}).toEqual(initialState)
    })
    it('should update list item', () => {
        const payload = [{
            name: 'Fluffykins item'
        }];
        const stateAfter = {
            items: payload,
            "status": {"error": false, "loading": false}
        }            
        expect(reducer(
            undefined,
            {
                type: actions.SUCCESS,
                payload
            }
        )).toEqual(stateAfter)
    })
})
