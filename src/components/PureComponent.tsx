import * as React from 'react';

type PureComponentProps = {};
type PureComponentState = {};

export class PureComponent extends React.PureComponent<PureComponentProps, PureComponentState> {
  constructor(props: PureComponentProps) {
    super(props);
  }

  public render() {
    return <h1 style={{ fontSize: 22, color: 'black' }}>Pure Component</h1>;
  }
}