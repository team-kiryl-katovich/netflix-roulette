import { Store } from 'redux';

import { AppState } from '../../store/models';

export type AppProps = {
  store: Store<AppState>;
};
