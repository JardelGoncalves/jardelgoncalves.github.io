import React from 'react';
import { storiesOf } from '@storybook/react';

import Textarea from '.';

storiesOf('Textarea', module)
  .add('Default', () => (
    <Textarea
      rows={5}
      placeholder="Descreva um pouco sobre seu projeto"
    />
  ));
