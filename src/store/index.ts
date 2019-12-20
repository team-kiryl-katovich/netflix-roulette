/* istanbul ignore file */
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { routerMiddleware } from 'connected-react-router';
import {
  Store, DeepPartial, compose, applyMiddleware, createStore, AnyAction, Dispatch,
} from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { AppState } from './models';
import { makeRootReducer } from './reducer';

export default class AppStore {
  private storeInstance: Store<AppState, AnyAction>;

  private routerHistory: History;

  public get instance() {
    return this.storeInstance;
  }

  public get history() {
    return this.routerHistory;
  }

  public constructor(preloadedState?: DeepPartial<AppState>, ssrUrl?: string) {
    this.routerHistory = ssrUrl
      ? createMemoryHistory({
        initialEntries: [ssrUrl],
      })
      : createBrowserHistory();

    const middlewares = [thunk, routerMiddleware(this.routerHistory)];
    const composeEnhancers = this.getComposeEnhancer();
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    this.storeInstance = createStore(makeRootReducer(this.routerHistory), preloadedState, enhancer);
  }

  public dispatch(action: AnyAction) {
    this.instance.dispatch(action);
  }

  public async thunkDispatch(action: ThunkAction<Promise<void>, AppState, {}, AnyAction>) {
    return (this.instance.dispatch as ThunkDispatch<AppState, {}, AnyAction>)(action);
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
