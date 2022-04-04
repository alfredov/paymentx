import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'

import { registerReducer } from '../../reducers'

export const createRootReducer = () => combineReducers({
  ...[registerReducer].reduce((store, reducer) => reducer(store), {}),
})

export type RootState = StateType<ReturnType<typeof createRootReducer>>
