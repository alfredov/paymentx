
import { createBrowserHistory } from 'history'

import { setup as setupStore } from './store/setup'
import { ApplicationStore } from './store/utils'
import { rootAction } from './store/actions'

export const setupRedux = () => {
  const history = createBrowserHistory()
  const { store, epicMiddleWare } = setupStore(history)

  type RootAction = typeof rootAction
  type BootStrapActions = ((store: ApplicationStore, actions: RootAction) => void)

  const triggerActions = (bootStrapActions: BootStrapActions) => {
    bootStrapActions(store, rootAction)
  }

  return {
    store,
    history,
    epicMiddleWare,
    triggerActions,
  }
}
