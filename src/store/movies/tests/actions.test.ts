import {
  Offset, OffsetResult, Movie, getMovies,
} from '@common/api';
import {
  MoviesFetchState, MoviesDataState, actions, ACTION_TYPES, thunkActions,
} from '..';

jest.mock('@common/api', () => ({
  getMovies: jest.fn(),
}));

describe('[STORE] [MOVIES] [ACTIONS]', () => {
  test('should return action with FETCH_MOVIES type any payload', () => {
    const fakePayload: MoviesFetchState = {
      loading: true,
      error: null,
      movies: [],
    };
    const action = actions.fetchMovies(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.FETCH_MOVIES);
  });

  test('should return action with FETCH_MOVIES_ERROR type any payload', () => {
    const fakePayload: MoviesFetchState = {
      loading: false,
      error: new Error('error'),
      movies: [],
    };
    const action = actions.fetchMoviesError(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.FETCH_MOVIES_ERROR);
  });

  test('should return action with RECEIVE_MOVIES_ADD type any payload', () => {
    const fakePayload: MoviesDataState = {
      error: null,
      loading: false,
      movies: [],
      offset: {
        limit: 0,
        offset: 0,
      },
    };
    const action = actions.receiveMoviesAdd(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.RECEIVE_MOVIES_ADD);
  });

  test('should return action with RECEIVE_MOVIES_UPDATE type any payload', () => {
    const fakePayload: MoviesDataState = {
      error: null,
      loading: false,
      movies: [],
      offset: {
        limit: 0,
        offset: 0,
      },
    };
    const action = actions.receiveMoviesUpdate(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.RECEIVE_MOVIES_UPDATE);
  });
});

describe('[STORE] [MOVIES] [THUNK_ACTIONS]', () => {
  const fakeOffset: Offset = {
    limit: 0,
    offset: 0,
  };
  const fakeDispatch = jest.fn();
  const fakeGetState = jest.fn(() => ({ moviesFilter: {} }));
  const fakeResult: OffsetResult<Movie[]> = {
    data: [],
    error: null,
    offset: 0,
    limit: 0,
    total: 0,
  };
  const fakeErrorResult: OffsetResult<Movie[]> = {
    ...fakeResult,
    error: new Error('fakeError'),
  };

  test('thunk searchMovie error', async () => {
    (getMovies as jest.Mock).mockImplementation(() => Promise.resolve(fakeErrorResult));

    await thunkActions.searchMovies(fakeOffset)(fakeDispatch, fakeGetState as any, {});

    expect(fakeDispatch).toBeCalledWith(actions.fetchMovies({ loading: true, error: null, movies: [] }));
    expect(fakeDispatch).toBeCalledWith(actions.fetchMoviesError({ loading: false, error: fakeErrorResult.error }));
  });

  test('thunk searchMovies success', async () => {
    (getMovies as jest.Mock).mockImplementation(() => Promise.resolve(fakeResult));

    await thunkActions.searchMovies(fakeOffset)(fakeDispatch, fakeGetState as any, {});

    expect(fakeDispatch).toBeCalledWith(actions.fetchMovies({ loading: true, error: null, movies: [] }));
    expect(fakeDispatch).toBeCalledWith(
      actions.receiveMoviesUpdate({
        loading: false,
        movies: fakeResult.data,
        offset: {
          offset: fakeResult.offset,
          limit: fakeResult.total,
        },
      }),
    );
  });

  test('thunk moreMovies error', async () => {
    (getMovies as jest.Mock).mockImplementation(() => Promise.resolve(fakeErrorResult));

    await thunkActions.moreMovies(fakeOffset)(fakeDispatch, fakeGetState as any, {});

    expect(fakeDispatch).toBeCalledWith(actions.fetchMovies({ loading: true, error: null }));
    expect(fakeDispatch).toBeCalledWith(actions.fetchMoviesError({ loading: false, error: fakeErrorResult.error }));
  });

  test('thunk moreMovies success', async () => {
    (getMovies as jest.Mock).mockImplementation(() => Promise.resolve(fakeResult));

    await thunkActions.moreMovies(fakeOffset)(fakeDispatch, fakeGetState as any, {});

    expect(fakeDispatch).toBeCalledWith(actions.fetchMovies({ loading: true, error: null }));
    expect(fakeDispatch).toBeCalledWith(
      actions.receiveMoviesAdd({
        loading: false,
        movies: fakeResult.data,
        offset: {
          offset: fakeResult.offset,
          limit: fakeResult.total,
        },
      }),
    );
  });
});
