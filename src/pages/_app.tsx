/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Navbar } from 'components/core/Navbar'
import { SwitchDarkMode } from 'components/core/SwitchDarkMode'
import { HeadSEO } from 'components/core/HeadSEO'
import Layout, { Content, Header, Side } from 'components/core/Layout'

import { Cache } from 'utils/cache'
import { THEMES } from 'utils/constants/enums'
import { THEME_SETTING_KEY } from 'utils/constants/local-storage'
import theme from 'styles/theme'
import * as S from 'styles/global.style'

import 'styles/global.css'
import { useSmooth } from 'hooks/use-smooth'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const [isDark, setIsDark] = useState(false)

  useSmooth()

  useEffect(() => {
    const theme = Cache.get(THEME_SETTING_KEY)
    setIsDark(theme === THEMES.DARK)
  }, [])

  const toggle = () => {
    const mode = Cache.get(THEME_SETTING_KEY)
    if (mode === THEMES.DARK) {
      Cache.set(THEME_SETTING_KEY, THEMES.LIGHT)
      setIsDark(false)
      return
    }
    Cache.set(THEME_SETTING_KEY, THEMES.DARK)
    setIsDark(true)
  }

  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: isDark ? theme.colors.dark : theme.colors.light
      }}
    >
      <HeadSEO
        metaDescription={pageProps.metaDescription}
        metaType={pageProps.metaType}
        pageTitle={pageProps.pageTitle || 'Jardel Gonçalves'}
        url={pageProps.url}
      />
      <S.GlobalStyle />
      <Layout isOnlyHeader>
        <Header>
          <Navbar>
            <SwitchDarkMode isDark={isDark} toggle={toggle} />
          </Navbar>
        </Header>
        <Side></Side>
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
