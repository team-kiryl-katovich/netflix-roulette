import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Button, Label, Loader, Logo, Input } from '../src/common/components';

import './styles';

storiesOf('Common Components', module)
  .add('Button', () => <Button title="Netflix Buton" onClick={() => {}} />)
  .add('Label', () => <Label text="Netflix Label" className="netflix-roulette-label" />)
  .add('Loader', () => <Loader loading />)
  .add('Logo', () => <Logo />)
  .add('Input', () => <Input value="Test input value" onChange={() => {}} />)
