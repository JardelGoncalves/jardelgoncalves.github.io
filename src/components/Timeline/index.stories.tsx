import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { GlobalStyle } from '../GlobalStyle';
import 'react-vertical-timeline-component/style.min.css';

import { Timeline } from '.';

storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <Timeline t={(s) => s} />
  ));
