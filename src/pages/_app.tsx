/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'
import { Providers } from '../utils/providers'

type Props = {
  Component: React.FC
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <Providers>
      <Head>
        <title>Jardel Gonçalves</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
