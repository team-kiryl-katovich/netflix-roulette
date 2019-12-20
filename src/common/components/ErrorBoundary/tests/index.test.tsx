import * as React from 'react';
import * as enzyme from 'enzyme';

import { ErrorBoundary } from '..';

describe('[COMMON] [COMPONENTS] [ERROR_BOUNDARY]', () => {
  test('should render component', () => {
    const component = enzyme.shallow(
      <ErrorBoundary>
        <div>fake children</div>
      </ErrorBoundary>,
    );
    expect(component).toMatchSnapshot();
  });

  test('should catch error', () => {
    const FakeChildren = () => <div>fake children</div>;
    const component = enzyme.mount(
      <ErrorBoundary>
        <FakeChildren />
      </ErrorBoundary>,
    );

    const fakeError = new Error('fakeError');
    const children = component.find(FakeChildren);
    children.simulateError(fakeError);

    expect(component.contains(fakeError.toString())).toBeTruthy();
  });
});
