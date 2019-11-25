import * as React from 'react';

import { Header, Search, InfoBar, Content, Footer } from './components';
import { ErrorBoundary } from './common/components';

import './common/styles';

export const App = () => (
  <div className="netflix-roulette">
    <ErrorBoundary>
      <Header>
        <Search />
      </Header>
      <InfoBar />
      <Content />
      <Footer />
    </ErrorBoundary>
  </div>
);
