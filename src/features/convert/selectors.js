import { createSelector } from 'reselect';
import { NAME } from './constants';

const getResultState = state => {
  if (!(state && state[NAME] && state[NAME].result)) return null;
  return state[NAME].result;
};

const getResult = createSelector(
  [getResultState],
  result => result
);

const getLeftoverState = state => {
  if (!(state && state[NAME] && state[NAME].leftover)) return null;
  return state[NAME].leftover;
};

const getLeftover = createSelector(
  [getLeftoverState],
  leftover => leftover
);

export default {
  getResult,
  getLeftover,
};
