/* eslint-disable @typescript-eslint/no-explicit-any */
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
      <Navbar />
      <Component {...pageProps} />
    </Providers>
  )
}

export default MyApp
