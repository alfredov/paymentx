
import { setup as setupStore } from './store/setup'
import { ApplicationStore } from './store/utils'
import { rootAction } from './store/actions'

export const setupRedux = () => {
  const { store, epicMiddleWare } = setupStore()

  type RootAction = typeof rootAction
  type BootStrapActions = ((store: ApplicationStore, actions: RootAction) => void)

  const triggerActions = (bootStrapActions: BootStrapActions) => {
    bootStrapActions(store, rootAction)
  }

  return {
    store,
    epicMiddleWare,
    triggerActions,
  }
}
