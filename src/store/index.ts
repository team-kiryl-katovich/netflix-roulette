import { Store, DeepPartial, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { AppState } from './models';
import { makeRootReducer } from './reducer';

// init as define plugin on build
declare const env: {
  production: boolean;
};

export default class AppStore {
  private storeInstance: Store<AppState>;

  public get instance() {
    return this.storeInstance;
  }

  public constructor(preloadedState?: DeepPartial<AppState>) {
    const composeEnhancers = this.getComposeEnhancer();
    const enhancer = composeEnhancers(applyMiddleware(thunk));

    this.storeInstance = createStore(makeRootReducer(), preloadedState, enhancer);
  }

  private getComposeEnhancer() {
    // return compose without REDUX DEV TOOLS when running production bundle
    if (env.production) {
      return compose;
    }

    return typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
      ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
      : compose;
  }
}
