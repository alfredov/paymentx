import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { setupRedux } from '../core-app'

function MyApp({ Component, pageProps }: AppProps) {
  const { store } = setupRedux()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
