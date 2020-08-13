import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import { Title } from '.';

storiesOf('Title', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  ))
  .add('default', () => (
    <Title
      text={text('text', 'Project')}
      size={number('size', 60)}
      color={text('color', '#5BCA5D')}
    />
  ));
