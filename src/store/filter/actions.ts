import { createAction } from 'redux-actions';
import { MoviesFilterState } from './models';

export const ACTION_TYPES = {
  SET_FILTER: 'SET_FILTER',
};

const setFilter = createAction<MoviesFilterState, MoviesFilterState>(
  ACTION_TYPES.SET_FILTER,
  (payload) => payload
);

export const actions = {
  setFilter,
};
