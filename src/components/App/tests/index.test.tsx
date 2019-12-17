import * as React from 'react';
import * as enzyme from 'enzyme';

import { createStore } from 'redux';
import { createMemoryHistory } from 'history';

import { AppProps } from '../models';
import { App } from '..';

describe('[COMPONENTS] [APP]', () => {
  test('should render component', () => {
    const fakeProps: AppProps = {
      store: createStore(jest.fn()),
      history: createMemoryHistory({ keyLength: 0 }),
    };

    const component = enzyme.shallow(<App {...fakeProps} />);
    expect(component).toMatchSnapshot();
  });
});
