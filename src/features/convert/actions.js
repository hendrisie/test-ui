// @flow
import {
  ACTION_SUBMIT,
} from './constants';

export const submitTotal = (payload) => ({
  type: ACTION_SUBMIT,
  payload,
});
