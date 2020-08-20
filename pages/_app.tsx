import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import { GlobalStyle, Head } from '../src/components';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
