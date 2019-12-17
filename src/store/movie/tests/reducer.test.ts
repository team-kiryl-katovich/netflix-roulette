import { MovieFetchState, MovieState, ACTION_TYPES, reducer, initialState } from '../';

describe('[SOTRE] [MOVIE] [REDUCER]', () => {
  test('should return initial state for unknown action', () => {
    const fakeAction = {
      type: 'unknown',
      payload: {},
    };

    const actual = reducer(initialState, fakeAction as any);
    expect(actual).toEqual(initialState);
  });

  test('should apply FETCH_MOVIE action to state', () => {
    const fakePayload: MovieFetchState = {
      error: null,
      loading: true,
      notFound: false,
    };
    const fakeAction = {
      type: ACTION_TYPES.FETCH_MOVIE,
      payload: fakePayload,
    };
    const expectedState = {
      ...initialState,
      ...fakePayload,
    };

    const actual = reducer(initialState, fakeAction as any);
    expect(actual).toEqual(expectedState);
  });

  test('should apply FETCH_MOVIE_ERROR action to state', () => {
    const fakePayload: MovieFetchState = {
      error: new Error('fakeError'),
      loading: true,
      notFound: false,
    };
    const fakeAction = {
      type: ACTION_TYPES.FETCH_MOVIE_ERROR,
      payload: fakePayload,
    };
    const expectedState = {
      ...initialState,
      ...fakePayload,
    };

    const actual = reducer(initialState, fakeAction as any);
    expect(actual).toEqual(expectedState);
  });

  test('should apply RECEIVE_MOVIE_UPDATE action to state', () => {
    const fakePayload: MovieState = {
      loading: false,
      notFound: false,
      movie: { id: 1 } as any,
    };
    const fakeAction = {
      type: ACTION_TYPES.RECEIVE_MOVIE_UPDATE,
      payload: fakePayload,
    };
    const expectedState = {
      ...initialState,
      ...fakePayload,
    };

    const actual = reducer(initialState, fakeAction as any);
    expect(actual).toEqual(expectedState);
  });
});
