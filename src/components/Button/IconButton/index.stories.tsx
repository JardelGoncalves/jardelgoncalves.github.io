import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean,
} from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { GlobalStyle } from '../../GlobalStyle';

import { IconButton } from '.';
import { GithubIcon } from '../../Svg';

storiesOf('Icon Button', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <IconButton
      icon={<GithubIcon />}
      path={text('path', 'https://google.com')}
      color={text('color', '#ffffff')}
      strokeHoverColor={text('strokeHoverColor', '#ffffff')}
      bg={text('bg', '#5BCA5D')}
      outline={boolean('outline', false)}
    />
  ));
