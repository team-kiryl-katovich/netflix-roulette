import { AppState } from '@store/models';
import { mapStateToProps, mapDispatchToProps } from '..';


describe('[ENHANCERS] [WITH_MOVIE]', () => {
  test('should map state to props', () => {
    const state: Partial<AppState> = {
      movieData: {
        movie: { id: 1 },
      } as any,
    };

    const actual = mapStateToProps(state as AppState);
    expect(actual.movieData.movie.id).toEqual(state.movieData.movie.id);
  });

  test('should map dispatch to props', () => {
    const dispatch = jest.fn();

    const actual = mapDispatchToProps(dispatch);
    actual.selectMovie(0);

    expect(dispatch).toHaveBeenCalled();
  });
});
