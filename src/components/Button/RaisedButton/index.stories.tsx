import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { GlobalStyle } from '../../GlobalStyle';

import { RaisedButton } from '.';

storiesOf('Button/Raised Button', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <RaisedButton
      text={text('text', 'Project')}
      color={text('color', '#FFFFFF')}
      bg={text('bg', '#5BCA5D')}
      outline={boolean('outline', false)}
    />
  ));
