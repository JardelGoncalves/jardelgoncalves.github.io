import React from 'react';
import { storiesOf } from '@storybook/react';

import ListProject from '.';

storiesOf('ListProject', module)
  .add('Default', () => (
    <ListProject />
  ));
