import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'react-vertical-timeline-component/style.min.css';

import { theme } from '../src/theme';
import { GlobalStyle, Head } from '../src/components';
import i18n from '../i18n';

class MyApp extends App {
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

export default i18n.appWithTranslation(MyApp);
