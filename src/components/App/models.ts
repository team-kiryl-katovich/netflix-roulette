import { Store } from 'redux';
import { History } from 'history';

import { AppState } from '@store/models';

export type AppProps = {
  store: Store<AppState>;
  history: History;
};
