import { combineReducers } from 'redux';

import * as MoviesData from './movies';
import * as MoviesFilter from './filter';

import { AppState } from './models';

export const makeRootReducer = () =>
  combineReducers<AppState>({
    moviesData: MoviesData.reducer,
    moviesFilter: MoviesFilter.reducer,
  });
