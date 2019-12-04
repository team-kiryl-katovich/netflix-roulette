import { MOVIE_ENDPOINT } from './constants';
import { Result, Movie, Offset, MovieFilter, OffsetResult } from './models';
import { callApiWithGet } from './utils';

export * from './models';

export const getMovies = async (offset: Offset, filter?: MovieFilter): Promise<OffsetResult<Movie[]>> => {
  return callApiWithGet<Movie[]>(MOVIE_ENDPOINT.GET_MOVIES, {
    ...offset,
    ...filter
  });
};

export const getMovie = async (id: string): Promise<Result<Movie>> => {
  return callApiWithGet<Movie>(`${MOVIE_ENDPOINT.GET_MOVIE}/${id}`);
};
