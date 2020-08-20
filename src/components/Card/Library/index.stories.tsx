import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
} from '@storybook/addon-knobs';

import { ThemeProvider } from 'styled-components';
import { theme } from '../../../theme';
import { GlobalStyle } from '../../GlobalStyle';

import { LibrariesCard } from '.';

storiesOf('Card/Libraries', module)
  .addDecorator(withKnobs)
  .addDecorator((storyFn) => (
    <>
      <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      <GlobalStyle />
    </>
  ))
  .add('default', () => (
    <LibrariesCard
      data={[
        {
          name: 'broleto',
          path: '#',
          logo: 'https://raw.githubusercontent.com/jardelgoncalves/broleto/master/logo.png',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, corrupti sit facilis aspernatur repellendus ab nobis suscipit dignissimos aut doloribus consequuntur.',
        },
      ]}

    />
  ));
