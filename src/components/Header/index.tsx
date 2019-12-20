import * as React from 'react';

import { Logo } from '../../common/components';

import { HeaderProps } from './models';

import './styles';

export const Header = ({ children }: HeaderProps) => (
  <div className="header">
    <div className="header__layout">
      <div className="header__background" />
    </div>
    <Logo />
    {children}
  </div>
);
