import { MoviesFilterState, ACTION_TYPES, reducer, initialState } from '../';

describe('[SOTRE] [FILTER] [REDUCER]', () => {
  test('should return initial state for unknown action', () => {
    const fakeAction = {
      type: 'unknown',
      payload: {},
    };

    const actual = reducer(initialState, fakeAction);
    expect(actual).toEqual(initialState);
  });

  test('should apply SET_FILTER action to state', () => {
    const fakePayload: MoviesFilterState = {
      filter: 'filter',
      search: 'search',
      searchBy: 'title',
      sortBy: 'id',
      sortOrder: 'asc',
    };
    const fakeAction = {
      type: ACTION_TYPES.SET_FILTER,
      payload: fakePayload,
    };
    const expectedState = {
      ...initialState,
      ...fakePayload,
    };

    const actual = reducer(initialState, fakeAction);
    expect(actual).toEqual(expectedState);
  });
});
