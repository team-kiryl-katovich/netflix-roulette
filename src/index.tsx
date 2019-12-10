import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components';
import AppStore from './store';

const store = new AppStore();

ReactDOM.render(<App store={store.instance} />, document.getElementById('root'));
