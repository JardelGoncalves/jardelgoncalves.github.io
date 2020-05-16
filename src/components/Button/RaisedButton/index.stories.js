import React from 'react';
import { storiesOf } from '@storybook/react';

import RaisedButton from '.';

storiesOf('RaisedButton', module)
  .add('Default', () => (
    <RaisedButton text="Enviar" />
  ));
