import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from '@store/models';
import { thunkActions } from '@store/movies';

import { WithMoviesDataProps, WithMoviesHandlersProps } from './models';

export * from './models';

export const mapStateToProps = ({ moviesData }: AppState): WithMoviesDataProps => ({ moviesData });

export const withMoviesData = connect(mapStateToProps);

export const mapDispatchToProps = (dispatch: Dispatch): WithMoviesHandlersProps => bindActionCreators(
  {
    searchMovies: thunkActions.searchMovies,
    moreMovies: thunkActions.moreMovies,
  },
  dispatch,
);

export const withMoviesDataHandlers = connect(null, mapDispatchToProps);

export const withMovies = connect(mapStateToProps, mapDispatchToProps);
