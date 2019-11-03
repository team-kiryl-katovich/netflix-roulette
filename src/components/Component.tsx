import * as React from 'react';

type ComponentProps = {};
type ComponentState = {};

export class Component extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
  }

  public render() {
    return <h1 style={{ fontSize: 22, color: 'green' }}>Component</h1>;
  }
}
