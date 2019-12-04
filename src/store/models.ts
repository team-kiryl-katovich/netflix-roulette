import { MoviesDataState } from './movies';
import { MoviesFilterState } from './filter';

export type AppState = {
  moviesData: MoviesDataState;
  moviesFilter: MoviesFilterState
};
