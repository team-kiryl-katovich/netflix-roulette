/* istanbul ignore file */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { App } from './components';
import AppStore from './store';

library.add(faSearch);

const store = new AppStore();

ReactDOM.render(<App store={store.instance} history={store.history} />, document.getElementById('root'));
