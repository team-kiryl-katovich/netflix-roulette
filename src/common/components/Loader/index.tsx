import * as React from 'react';

import { LoaderProps } from './models';

import './styles';

export const Loader = ({ loading }: LoaderProps) => loading && (
<div className="loader-container">
  <div className="loader-container__loader">Loading...</div>
</div>
);
