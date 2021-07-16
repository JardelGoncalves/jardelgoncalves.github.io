/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { setLocale } from 'yup'
import { pt } from 'yup-locale-pt'

import { Navbar } from 'components/core/Navbar'
import { SwitchDarkMode } from 'components/core/SwitchDarkMode'
import { HeadSEO } from 'components/core/HeadSEO'
import Layout, { Content, Header, Side } from 'components/core/Layout'
import { LoadingLogo } from 'components/core/Loading'

import { Cache } from 'utils/cache'
import { THEMES } from 'utils/constants/enums'
import { THEME_SETTING_KEY } from 'utils/constants/local-storage'
import { useSmooth } from 'hooks/use-smooth'
import theme from 'styles/theme'

import 'styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import * as S from 'styles/global.style'

type Props = {
  Component: React.FC
  pageProps: any
}

const sideItems = [
  {
    text: 'Dashboard',
    icon: 'dashboard',
    to: '/dashboard'
  },
  {
    text: 'Artigos',
    icon: 'paper',
    to: '/dashboard/articles'
  },
  {
    text: 'Mensagens',
    icon: 'chat',
    to: '/dashboard/messages'
  }
]

setLocale(pt)
function MyApp({ Component, pageProps }: Props) {
  const [isDark, setIsDark] = useState(false)
  const [minus, setMinus] = useState(false)
  const [mountedPage, setMountedPage] = useState(false)

  useSmooth()

  useEffect(() => {
    const theme = Cache.get(THEME_SETTING_KEY)
    setIsDark(theme === THEMES.DARK)
    setMountedPage(true)
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {mountedPage ? (
        <Layout isOnlyHeader={!pageProps.isLayoutAuth} minus={minus}>
          <Header hasSide={pageProps.isLayoutAuth} full={pageProps.isFullPage}>
            <Navbar
              isLayoutAuth={pageProps.isLayoutAuth}
              minus={minus}
              onMinusChange={() => setMinus(!minus)}
            >
              <SwitchDarkMode isDark={isDark} toggle={toggle} />
            </Navbar>
          </Header>
          {pageProps.isLayoutAuth && <Side minus={minus} items={sideItems} />}
          <Content hasSide={pageProps.isLayoutAuth} full={pageProps.isFullPage}>
            <Component {...pageProps} />
          </Content>
        </Layout>
      ) : (
        <LoadingLogo />
      )}
    </ThemeProvider>
  )
}

export default MyApp
