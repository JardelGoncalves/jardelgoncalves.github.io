/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import { Navbar } from '../components/core/Navbar'
import { SwitchDarkMode } from '../components/core/SwitchDarkMode'
import { THEME_SETTING_KEY } from '../utils/constants/local-storage'
import { THEMES } from '../utils/constants/enums'

import theme from '../styles/theme'
import '../styles/globals.css'
import { Cache } from '../utils/cache'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  console.log(Cache.get(THEME_SETTING_KEY))
  const [isDark, setIsDark] = useState(
    Cache.get(THEME_SETTING_KEY) === THEMES.DARK
  )

  const toggle = () => {
    const mode = Cache.get(THEME_SETTING_KEY)
    console.log(mode)
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
      <Head>
        <title>Jardel Gonçalves</title>
      </Head>
      <Navbar>
        <SwitchDarkMode isDark={isDark} toggle={toggle} />
      </Navbar>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
