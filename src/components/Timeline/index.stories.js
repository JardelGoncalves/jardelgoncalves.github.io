import React from 'react';
import { storiesOf } from '@storybook/react';

import Timeline from '.';

storiesOf('Timeline', module)
  .add('Default', () => (
    <Timeline />
  ));
