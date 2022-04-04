import { combineReducers } from 'redux'
import { combineReducersByIndex } from '../core-app/utils'
import { StateType } from 'typesafe-actions'

import { REDUCER_INDEX } from '../constants'
import fetchStudent from './fetchStudent'

const reducer = combineReducers({
  fetchStudent
})

export const { registerReducer } = combineReducersByIndex(REDUCER_INDEX, reducer)

export type RootState = {
  [REDUCER_INDEX]: StateType<typeof reducer>
}
