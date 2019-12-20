import { AppState } from '@store/models';
import { mapStateToProps, mapDispatchToProps } from '..';


describe('[ENHANCERS] [WITH_FILTER]', () => {
  test('should map state to props', () => {
    const state: Partial<AppState> = {
      moviesFilter: {
        search: 'fakeSearch',
      },
    };

    const actual = mapStateToProps(state as AppState);
    expect(actual.filter.search).toEqual(state.moviesFilter.search);
  });

  test('should map dispatch to props', () => {
    const dispatch = jest.fn();

    const actual = mapDispatchToProps(dispatch);
    actual.setFilter({});

    expect(dispatch).toHaveBeenCalled();
  });
});
