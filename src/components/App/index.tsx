import * as React from 'react';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '@common/components';

import { Header, Search, InfoBar, Content, Footer } from '../';

import { AppProps } from './models';

import './styles';

export const App = ({ store }: AppProps) => (
  <div className="netflix-roulette">
    <Provider store={store}>
      <ErrorBoundary>
        <Header>
          <Search />
        </Header>
        <InfoBar />
        <Content />
        <Footer />
      </ErrorBoundary>
    </Provider>
  </div>
);
