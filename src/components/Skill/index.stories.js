import React from 'react';
import { storiesOf } from '@storybook/react';

import Skill from '.';

storiesOf('Skill', module)
  .add('Default', () => (
    <Skill
      percentage={50}
      label="React"
    />
  ));
