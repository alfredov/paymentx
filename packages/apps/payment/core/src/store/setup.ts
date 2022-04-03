
import { History } from 'history'
import { createEpicMiddleware } from 'redux-observable'
import { createStore } from 'redux'
import { ajax } from 'rxjs/ajax'

import { createRootReducer, RootState } from './reducer'
import { createRootEpic } from './epics'
import { getEnhancers } from './utils'
import { RootAction } from './actions'

export const setup = (
  history: History,
  initialState?: RootState,
) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const epicMiddleWare = createEpicMiddleware<RootAction, RootAction, any>({ dependencies: {
    ajax,
    getJSON: ajax.getJSON,
  } })

  const enhancers = getEnhancers(history, epicMiddleWare)

  const store = createStore(
    createRootReducer(),
    initialState,
    enhancers,
  )

  epicMiddleWare.run(createRootEpic())

  return {
    store,
    epicMiddleWare
  }
}
