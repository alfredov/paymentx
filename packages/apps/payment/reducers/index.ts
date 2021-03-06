import { combineReducers } from 'redux'
import { combineReducersByIndex } from '../core-app/utils'
import { StateType } from 'typesafe-actions'

import { REDUCER_INDEX } from '../constants'
import fetchStudent from './fetchStudent'
import fetchOrders from './fetchOrders'
import { cartOrder } from './cartOrder'

const reducer = combineReducers({
  fetchStudent,
  fetchOrders,
  cartOrder
})

export const { registerReducer } = combineReducersByIndex(REDUCER_INDEX, reducer)

export type RootState = {
  [REDUCER_INDEX]: StateType<typeof reducer>
}
