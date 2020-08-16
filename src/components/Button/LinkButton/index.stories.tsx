import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, number, select, boolean,
} from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { GlobalStyle } from '../../GlobalStyle';

import { LinkButton } from '.';

storiesOf('Link Button', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <LinkButton
      path={text('path', 'https://google.com')}
      isExternal={boolean('isExternal', false)}
      text={text('text', 'All project')}
      hoverColor={text('hoverColor', '#ffffff')}
      borderColor={text('borderColor', '#5BCA5D')}
      maxWidth={number('maxWidth', 250)}
      border={select('border', ['ALL', 'TOP', 'BOTTOM'], 'ALL')}
      size={number('size', 40)}
    />
  ));
