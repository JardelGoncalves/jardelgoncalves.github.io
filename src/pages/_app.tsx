/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Navbar } from 'components/core/Navbar'
import { SwitchDarkMode } from 'components/core/SwitchDarkMode'
import { HeadSEO } from 'components/core/HeadSEO'
import { Layout } from 'components/core/Layout'

import { Cache } from 'utils/cache'
import { THEMES } from 'utils/constants/enums'
import { THEME_SETTING_KEY } from 'utils/constants/local-storage'
import theme from 'styles/theme'
import * as S from 'styles/global.style'
import { LoadingLogo } from 'components/core/Loading'

import 'styles/global.css'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = Cache.get(THEME_SETTING_KEY)
    setIsDark(theme === THEMES.DARK)
    setMounted(true)
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
      {mounted ? (
        <>
          <Navbar>
            <SwitchDarkMode isDark={isDark} toggle={toggle} />
          </Navbar>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      ) : (
        <LoadingLogo />
      )}
    </ThemeProvider>
  )
}

export default MyApp
