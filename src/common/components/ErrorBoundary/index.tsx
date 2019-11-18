import * as React from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './models';

import './styles';

export class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState(
      {
        error,
        errorInfo
      },
      this.reset
    );
  }

  public render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    return (
      <>
        {children}
        {error && (
          <div className="error-message">
            <div className="error-message__title">{error.toString()}</div>
            <div className="error-message__description">{errorInfo.componentStack}</div>
          </div>
        )}
      </>
    );
  }

  private reset() {
    setTimeout(
      () =>
        this.setState({
          error: null,
          errorInfo: null
        }),
      3000
    );
  }
}
