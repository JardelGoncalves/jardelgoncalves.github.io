import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, number,
} from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { GlobalStyle } from '../GlobalStyle';

import { ProgressBar } from '.';

storiesOf('ProgressBar', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <ProgressBar
      label={text('label', 'React')}
      color={text('color', '#5BCA5D')}
      bg={text('bg', '#5BCA5D')}
      percentage={number('percentage', 90)}
    />
  ));
