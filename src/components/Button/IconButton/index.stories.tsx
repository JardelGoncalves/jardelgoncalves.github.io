import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean,
} from '@storybook/addon-knobs';
import { FiGithub } from 'react-icons/fi';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { GlobalStyle } from '../../GlobalStyle';

import { IconButton } from '.';

storiesOf('Button/Icon Button', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <IconButton
      icon={<FiGithub />}
      path={text('path', 'https://google.com')}
      color={text('color', '#ffffff')}
      strokeHoverColor={text('strokeHoverColor', '#ffffff')}
      bg={text('bg', '#5BCA5D')}
      outline={boolean('outline', false)}
    />
  ));
