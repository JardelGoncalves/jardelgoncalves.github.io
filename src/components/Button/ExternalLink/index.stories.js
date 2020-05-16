import React from 'react';
import { storiesOf } from '@storybook/react';

import ExternalLink from '.';

storiesOf('ExternalLink', module)
  .add('Default', () => (
    <ExternalLink text="Enviar" />
  ));
