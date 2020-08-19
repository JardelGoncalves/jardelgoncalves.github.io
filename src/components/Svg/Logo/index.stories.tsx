import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { GlobalStyle } from '../../GlobalStyle';

import { Logo } from '.';

storiesOf('Svg/Logo', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <div style={{ height: 500, background: '#2c2c2c' }}>
      <Logo />
    </div>
  ));
