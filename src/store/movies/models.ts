import { Movie, Offset } from '@common/api';

export type MoviesState = {
  movies: Movie[];
  offset: Offset;
  loading: boolean;
};

export type MoviesFetchState = {
  loading: boolean;
  error: Error;
  movies?: Movie[];
};

export type MoviesDataState = MoviesState & MoviesFetchState;
