import reducer, { initialState } from './reducers';
import { NAME, ACTION_SUBMIT } from './constants';
import selectors from './selectors';

describe('selectors', () => {
  let state;
  beforeEach(() => {
    state = {
      [NAME]: reducer(initialState, {
        type: ACTION_SUBMIT,
        payload: 'Rp 100501'
      })
    };
  });
  it('should return correct getResult', () => {
    expect(selectors.getResult(state)).toMatchSnapshot();
  });

  it('should return correct getLeftover', () => {
    expect(selectors.getLeftover(state)).toMatchSnapshot();
  });
});
