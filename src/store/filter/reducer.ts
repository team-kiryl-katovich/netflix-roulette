import { handleActions } from 'redux-actions';

import { ACTION_TYPES } from './actions';
import { MoviesFilterState } from './models';

export const initialState: MoviesFilterState = {
  filter: '',
  search: '',
  searchBy: 'title',
  sortBy: 'release_date',
  sortOrder: 'asc',
};

export const reducer = handleActions<MoviesFilterState>(
  {
    [ACTION_TYPES.SET_FILTER]: (state, action) => ({
      ...state,
      ...action.payload,
    }),    
  },
  initialState
);
