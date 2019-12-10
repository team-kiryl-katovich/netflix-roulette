import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { AppState } from '@store/models';
import { actions } from '@store/filter';

import { WithFilterDataProps, WithFilterHandlersProps } from './models';

export * from './models';

const mapStateToProps = (state: AppState): WithFilterDataProps => ({ filter: state.moviesFilter });

export const withFilterData = connect(mapStateToProps);

const mapDispatchToProps = (dispatch: Dispatch): WithFilterHandlersProps =>
  bindActionCreators(
    {
      setFilter: actions.setFilter,
    },
    dispatch
  );

export const withFilterHandlers = connect(null, mapDispatchToProps);

export const withFilter = connect(mapStateToProps, mapDispatchToProps);
