import { AppState } from '@store/models';
import { mapStateToProps, mapDispatchToProps } from '..';


describe('[ENHANCERS] [WITH_MOVIE]', () => {
  test('should map state to props', () => {
    const state: Partial<AppState> = {
      moviesData: {
        movies: [{ id: 1 }],
      } as any,
    };

    const actual = mapStateToProps(state as AppState);
    expect(actual.moviesData.movies[0].id).toEqual(state.moviesData.movies[0].id);
  });

  test('should map dispatch to props', () => {
    const dispatch = jest.fn();

    const actual = mapDispatchToProps(dispatch);
    actual.searchMovies({});
    actual.moreMovies({});

    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
