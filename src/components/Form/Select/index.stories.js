import React from 'react';
import { storiesOf } from '@storybook/react';

import Select from '.';

const options = [
  { label: '1 página', value: '1' },
  { label: '2 páginas', value: '2' },
  { label: '3 páginas', value: '3' },
  { label: '4 páginas', value: '4' },
  { label: '5 páginas', value: '5' },
  { label: '6 páginas', value: '6' },
  { label: '7 páginas', value: '7' },
  { label: '8 páginas', value: '8' },
  { label: '9 páginas', value: '9' },
  { label: '+10 páginas', value: '+10' },
];

storiesOf('Select', module)
  .add('Default', () => (
    <Select options={options} placeholder="Quantidade de páginas" />
  ));
