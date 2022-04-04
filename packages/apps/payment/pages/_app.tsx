import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { setupRedux } from '../core-app'

function MyApp({ Component, pageProps }: AppProps) {
  const { store, triggerActions } = setupRedux()

  triggerActions((store, actions) => {
    store.dispatch(actions.fetchStudent.request({ id: '3b35fb50-3d5e-41b3-96d6-c5566141fab0' }))
  })

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
