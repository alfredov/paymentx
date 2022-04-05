

import { createEpicMiddleware } from 'redux-observable'
import { createStore } from 'redux'
import { ajax } from 'rxjs/ajax'

import { createRootReducer, RootState } from './reducer'
import { createRootEpic } from './epics'
import { getEnhancers } from './utils'

export const setup = (
  initialState?: RootState,
) => {

  const epicMiddleWare = createEpicMiddleware<any, any, any>({ dependencies: {
    ajax,
    getJSON: ajax.getJSON,
  } })

  const enhancers = getEnhancers(epicMiddleWare)

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
