import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from '.';

storiesOf('Tag', module)
  .add('Default', () => (
    <Tag text="React" />
  ));
