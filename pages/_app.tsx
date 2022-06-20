import '../styles/index.scss'
import '../styles/swipe-custom.scss'

import type { AppProps } from 'next/app'
import { CounterProvider } from 'utils/counter'
import '../styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  )
}

export default MyApp
