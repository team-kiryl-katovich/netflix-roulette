import { Movie, getMovie, Result } from '@common/api';
import { MovieFetchState, MovieDataState, actions, ACTION_TYPES, thunkActions } from '../';

jest.mock('@common/api', () => ({
  getMovie: jest.fn(),
}));

describe('[STORE] [MOVIE] [ACTIONS]', () => {
  test('should return action with FETCH_MOVIE type any payload', () => {
    const fakePayload: MovieFetchState = {
      loading: true,
      error: null,
      notFound: false,
    };
    const action = actions.fetchMovie(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.FETCH_MOVIE);
  });

  test('should return action with FETCH_MOVIE_ERROR type any payload', () => {
    const fakePayload: MovieFetchState = {
      loading: false,
      error: new Error('error'),
      notFound: false,
    };
    const action = actions.fetchMovieError(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.FETCH_MOVIE_ERROR);
  });

  test('should return action with RECEIVE_MOVIE_UPDATE type any payload', () => {
    const fakePayload: MovieDataState = {
      error: null,
      loading: false,
      movie: { id: 1, title: 'movie1' } as any,
      notFound: false,
    };
    const action = actions.receiveMovieUpdate(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.RECEIVE_MOVIE_UPDATE);
  });
});

describe('[STORE] [MOVIE] [THUNK_ACTIONS]', () => {
  const fakeMovie: Partial<Movie> = { id: 1 };
  const fakeDispatch = jest.fn();
  const fakeGetState = jest.fn(() => ({ moviesData: { movies: [fakeMovie] } }));
  const fakeResult: Result<Movie> = {
    data: fakeMovie as Movie,
    error: null,
  };

  const fakeErrorResult: Result<Movie> = {
    ...fakeResult,
    error: new Error('fakeError'),
  };

  test('thunk selectMovie error', async () => {
    (getMovie as jest.Mock).mockImplementation(() => {
      return Promise.resolve(fakeErrorResult);
    });

    await thunkActions.selectMovie(0)(fakeDispatch, fakeGetState as any, {});

    expect(fakeDispatch).toBeCalledWith(actions.fetchMovie({ loading: true, error: null, notFound: false }));
    expect(fakeDispatch).toBeCalledWith(
      actions.fetchMovieError({ error: fakeErrorResult.error, loading: false, notFound: false })
    );
  });

  test('thunk selectMovies success from store', async () => {
    await thunkActions.selectMovie(fakeMovie.id)(fakeDispatch, fakeGetState as any, {});

    expect(fakeDispatch).toBeCalledWith(actions.fetchMovie({ loading: true, error: null, notFound: false }));
    expect(fakeDispatch).toBeCalledWith(
      actions.receiveMovieUpdate({ movie: fakeMovie as Movie, loading: false, notFound: false })
    );
  });

  test('thunk selectMovies success from api', async () => {
    const fakeApiResult: Result<Movie> = {
      ...fakeResult,
      data: { id: 2 } as Movie,
    };

    (getMovie as jest.Mock).mockImplementation(() => {
      return Promise.resolve(fakeApiResult);
    });

    await thunkActions.selectMovie(fakeApiResult.data.id)(fakeDispatch, fakeGetState as any, {});

    expect(fakeDispatch).toBeCalledWith(actions.fetchMovie({ loading: true, error: null, notFound: false }));
    expect(fakeDispatch).toBeCalledWith(
      actions.receiveMovieUpdate({
        movie: fakeApiResult.data,
        loading: false,
        notFound: false,
      })
    );
  });
});
