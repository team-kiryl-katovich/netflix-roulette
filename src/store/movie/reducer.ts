import { handleActions } from 'redux-actions';

import { ACTION_TYPES } from './actions';
import { MovieDataState } from './models';

export const initialState: MovieDataState = {
  error: null,
  loading: false,
  notFound: false,
  movie: null,
};

export const reducer = handleActions<MovieDataState>(
  {
    [ACTION_TYPES.FETCH_MOVIE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ACTION_TYPES.FETCH_MOVIE_ERROR]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [ACTION_TYPES.RECEIVE_MOVIE_UPDATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState,
);
