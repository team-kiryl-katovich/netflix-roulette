import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ErrorBoundary } from '@common/components';
import { ROUTES, ROUTES_PARAMS } from '@common/routes';

import { Header, MovieInfo, InfoBar, Content, Footer, Search, NotFound } from '../';

import { AppProps } from './models';

import './styles';

export const App = ({ store, history }: AppProps) => (
  <div className="netflix-roulette">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Header>
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <Search />
              </Route>
              <Route path={`${ROUTES.SEARCH}/:${ROUTES_PARAMS.QUERY}`}>
                <Search />
              </Route>
              <Route path={`${ROUTES.MOVIE}/:${ROUTES_PARAMS.ID}`}>
                <MovieInfo />
              </Route>
              <Route path={ROUTES.PAGE_404}>
                <NotFound />
              </Route>
              <Redirect from="*" to={ROUTES.PAGE_404} />
            </Switch>
          </Header>
          <InfoBar />
          <Content />
          <Footer />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  </div>
);
