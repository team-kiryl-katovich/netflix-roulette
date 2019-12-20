import { MoviesFilterState, actions, ACTION_TYPES } from '..';

describe('[SOTRE] [FILTER] [ACTIONS]', () => {
  test('should return action with SET_FILTER type any payload', () => {
    const fakePayload: MoviesFilterState = {
      filter: 'filter',
      search: 'search',
      searchBy: 'title',
      sortBy: 'id',
      sortOrder: 'asc',
    };
    const action = actions.setFilter(fakePayload);

    expect(action.payload).toEqual(fakePayload);
    expect(action.type).toEqual(ACTION_TYPES.SET_FILTER);
  });
});
