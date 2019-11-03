import * as React from 'react';

export const CreateElement = () =>
  React.createElement(
    'h1',
    {
      style: {
        fontSize: 22,
        color: 'red'
      }
    },
    'Create Element Component'
  );
