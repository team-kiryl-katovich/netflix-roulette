import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';

import express from 'express';
import path from 'path';
import fs from 'fs';

import AppStore from '@store/index';
import * as webpackConfig from '../../webpack/webpack.config';
import { App } from '../../src/components';

import { executeAsyncActions } from './store';

const SERVER_PORT = 3000;
const app = express();

if (!env.production) {
  const compiler = webpack(webpackConfig());
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: '/',
      index: false,
    }),
  );
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static('./dist'));
}

app.get('/*', async (req, res) => {
  const store = new AppStore({}, req.url);
  await executeAsyncActions(store, req);
  const appHtml = ReactDOMServer.renderToString(<App store={store.instance} history={store.history} />);

  const indexFile = path.resolve('./dist/base-index.html');
  fs.readFile(indexFile, 'utf8', async (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    let html = data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    html = html.replace(
      '<script id="preloaded-state"></script>',
      `<script id="preloaded-state">window.__PRELOADED_STATE__ = ${JSON.stringify(store.instance.getState()).replace(
        /</g,
        '\\u003c',
      )}</script>`,
    );

    return res.send(html);
  });
});

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running: http://localhost:${SERVER_PORT}`);
});
