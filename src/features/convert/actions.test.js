import configureMockStore from 'redux-mock-store';
import { submitTotal } from './actions';

let mockStore;
let store;

beforeAll(() => {
  mockStore = configureMockStore();
  store = mockStore({});
});

describe('action creators', () => {
  it('creates action = ACTION_SUBMIT when submitTotal was successful', () => {
    // Dispatch the createSuccess action with the values of a new to-do.
    store.dispatch(
      submitTotal('Rp 10501')
    );
    expect(store.getActions()).toMatchSnapshot();
  });
});
