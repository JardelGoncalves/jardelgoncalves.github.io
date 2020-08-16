import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

import '../../../public/static/imgs/avatar.webp';

import { Avatar } from '.';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  ))
  .add('default', () => (
    <Avatar
      url={text('text', 'static/media/avatar.64bc294c.webp')}
    />
  ));
