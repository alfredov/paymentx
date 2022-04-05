import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'

import { asyncReducer } from '../core-app/utils'
import action, { TAction, TSuccess } from '../actions/fetchOrders'
import addOrder, { TAction as TAddOrderAction } from '../actions/addOrder'
import removeOrder, { TAction as TRemoveOrderAction } from '../actions/removeOrder'

const { failure, cancel, success, request } = action

type TActions = TAction | TAddOrderAction | TRemoveOrderAction

type Item = { due: string }
const sortDate = (a: Item, b: Item) => {
  const dateA = new Date(a.due).getTime()
  const dateB = new Date(b.due).getTime()
  return dateA - dateB
}

const updateOrders = (orders: TSuccess) => {
  const paid = orders.filter(item => item.status === 'PAID')
  const due = orders.filter(item => item.status === 'DUE')
    .sort(sortDate)
    .map((item, index, array) => {
      const previousItemsChecked = array.slice(0, index).every(item => item.checked)
      return previousItemsChecked ? { ...item, disabled: false } : { ...item, disabled: true, checked: false }
    })
  
  const dueOrderIsFullChecked = due.every(item => item.checked)
  const outstanding = orders.filter(item => item.status === 'OUTSTANDING')
    .sort(sortDate)
    .map((item, index, array) => {
      if (!dueOrderIsFullChecked) {
        return { ...item, disabled: true, checked: false }
      } else {
        const previousItemsChecked = array.slice(0, index).every(item => item.checked)
        return previousItemsChecked ? { ...item, disabled: false } : { ...item, disabled: true, checked: false }
      }
    })
 
  return [
    ...paid,
    ...due,
    ...outstanding
  ]
}

const data = createReducer<TSuccess, TActions>([])
  .handleAction([failure, cancel], () => [])
  .handleAction(removeOrder.request, (state, { payload }) => {
    const index = state.findIndex(item => item.id === payload.id)
    if (index !== -1) {
      const item = state[index]
      const orders = [
        ...state.slice(0, index),
        { ...item, checked: false },
        ...state.slice(index + 1)
      ]
      return updateOrders(orders)
    }
    return state
  })
  .handleAction(addOrder, (state, { payload }) => {
    const index = state.findIndex(item => item.id === payload.id)
    if (index !== -1) {
      const item = state[index]
      const orders = [
        ...state.slice(0, index),
        { ...item, checked: true },
        ...state.slice(index + 1)
      ]
      return updateOrders(orders)
    }
    return state
  })
  .handleAction(success, (_state, { payload }) => {
    const paid = payload.filter(item => item.status === 'PAID')
    const due = payload.filter(item => item.status === 'DUE')
      .sort(sortDate)
      .map((item, index) => {
        if (index === 0) {
          return { ...item, disabled: false }
        }
        return item
      })
    
    const outstanding = payload.filter(item => item.status === 'OUTSTANDING').sort(sortDate)

    return [
      ...paid,
      ...due,
      ...outstanding
    ]
  })

const loading = createReducer<boolean, TActions>(false)
  .handleAction([request, removeOrder.request], () => true)
  .handleAction([failure, success, removeOrder.success ,cancel], () => false)

export default combineReducers({ 
  ...asyncReducer(action),
  data,
  loading,
})
