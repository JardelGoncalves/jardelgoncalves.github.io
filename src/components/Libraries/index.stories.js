import React from 'react';
import { storiesOf } from '@storybook/react';

import Libraries from '.';

storiesOf('Libraries', module)
  .add('Default', () => (
    <Libraries />
  ));
