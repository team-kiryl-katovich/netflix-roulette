import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from '@store/models';
import { thunkActions } from '@store/movie';

import { WithMovieDataProps, WithMovieHandlersProps } from './models';

export * from './models';

export const mapStateToProps = ({ movieData }: AppState): WithMovieDataProps => ({ movieData });

export const withMovieData = connect(mapStateToProps);

export const mapDispatchToProps = (dispatch: Dispatch): WithMovieHandlersProps =>
  bindActionCreators(
    {
      selectMovie: thunkActions.selectMovie,
    },
    dispatch
  );

export const withMovieDataHandlers = connect(null, mapDispatchToProps);

export const withMovie = connect(mapStateToProps, mapDispatchToProps);
