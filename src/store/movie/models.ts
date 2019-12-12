import { Movie } from '@common/api';

export type MovieState = {
  movie: Movie;
  loading: boolean;
  notFound: boolean;
};

export type MovieFetchState = {
  loading: boolean;
  notFound: boolean;
  error: Error;
};

export type MovieDataState = MovieState & MovieFetchState;
