import { MoviesFetchState, MoviesState, ACTION_TYPES, reducer, initialState } from '../';

describe('[SOTRE] [MOVIES] [REDUCER]', () => {
  test('should return initial state for unknown action', () => {
    const fakeAction = {
      type: 'unknown',
      payload: {},
    };

    const actual = reducer(initialState, fakeAction as any);
    expect(actual).toEqual(initialState);
  });

  test('should apply FETCH_MOVIES action to state', () => {
    const fakePayload: MoviesFetchState = {
      error: null,
      loading: true,
    };
    const fakeAction = {
      type: ACTION_TYPES.FETCH_MOVIES,
      payload: fakePayload,
    };
    const expectedState = {
      ...initialState,
      ...fakePayload,
    };

    const actual = reducer(initialState, fakeAction as any);
    expect(actual).toEqual(expectedState);
  });

  test('should apply FETCH_MOVIES_ERROR action to state', () => {
    const fakePayload: MoviesFetchState = {
      error: new Error('fakeError'),
      loading: true,
    };
    const fakeAction = {
      type: ACTION_TYPES.FETCH_MOVIES_ERROR,
      payload: fakePayload,
    };
    const expectedState = {
      ...initialState,
      ...fakePayload,
    };

    const actual = reducer(initialState, fakeAction as any);
    expect(actual).toEqual(expectedState);
  });

  test('should apply RECEIVE_MOVIES_ADD action to state', () => {
    const fakePayload: MoviesState = {
      loading: false,
      movies: [{} as any],
      offset: {
        offset: 0,
        limit: 0,
      },
    };
    const fakeAction = {
      type: ACTION_TYPES.RECEIVE_MOVIES_ADD,
      payload: fakePayload,
    };
    const fakeInitialState = {
      ...initialState,
      movies: [{} as any],
    };

    const expectedState = {
      ...fakeInitialState,
      ...fakePayload,
      movies: [...fakeInitialState.movies, ...fakePayload.movies],
    };

    const actual = reducer(fakeInitialState, fakeAction as any);
    expect(actual).toEqual(expectedState);
  });

  test('should apply RECEIVE_MOVIES_UPDATE action to state', () => {
    const fakePayload: MoviesState = {
      loading: false,
      movies: [{} as any],
      offset: {
        offset: 0,
        limit: 0,
      },
    };
    const fakeAction = {
      type: ACTION_TYPES.RECEIVE_MOVIES_UPDATE,
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
