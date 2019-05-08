import reducer from './reducers';
import { initialState } from './reducers';
import { ACTION_SUBMIT, NAME } from './constants';

describe('convert reducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle ACTION_SUBMIT with proper payload', () => {
    expect(
      reducer(state, {
        type: ACTION_SUBMIT,
        payload: 'Rp 100500'
      })
    ).toMatchSnapshot();
  });

  it('should not error if empty payload', () => {
    expect(
      reducer(state, {
        type: ACTION_SUBMIT,
        payload: ''
      })
    ).toMatchSnapshot();
  });

  it('should not error when null payload and empty denomination', () => {
    state = {
      denomination: null,
      ...initialState
    };
    expect(
      reducer(state, {
        type: ACTION_SUBMIT,
        payload: null
      })
    ).toMatchSnapshot();
  });
});
