import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

import { Footer } from '.'

storiesOf('Footer', module)
  .addDecorator(storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  ))
  .add('default', () =>(
    <Footer />
  ))

