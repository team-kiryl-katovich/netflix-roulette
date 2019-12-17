/* istanbul ignore file */
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';
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
  private routerHistory: History;

  public get instance() {
    return this.storeInstance;
  }

  public get history() {
    return this.routerHistory;
  }

  public constructor(ssr: boolean = false, preloadedState?: DeepPartial<AppState>) {
    this.routerHistory = ssr ? createMemoryHistory() : createBrowserHistory();

    const middlewares = [thunk, routerMiddleware(this.routerHistory)];
    const composeEnhancers = this.getComposeEnhancer();
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    this.storeInstance = createStore(makeRootReducer(this.routerHistory), preloadedState, enhancer);
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
