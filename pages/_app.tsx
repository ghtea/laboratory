import '../styles/index.scss'
import type { AppProps } from 'next/app'
import { CounterProvider } from 'utils/counter'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  )
}

export default MyApp
