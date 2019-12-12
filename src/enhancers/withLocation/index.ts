import { connect } from 'react-redux';

import { AppState } from '@store/models';

export * from './models';

const mapStateToProps = (state: AppState) => ({ location: state.router.location });

export const withLocation = connect(mapStateToProps);