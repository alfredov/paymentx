import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'

import { asyncReducer } from '../core-app/utils'
import action, { TAction, TSuccess } from '../actions/fetchOrders'

const { failure, cancel, success } = action

type Item = { due: string }
const sortDate = (a: Item, b: Item) => {
  const dateA = new Date(a.due).getTime()
  const dateB = new Date(b.due).getTime()
  return dateA - dateB
}

const data = createReducer<TSuccess, TAction>([])
  .handleAction([failure, cancel], () => [])
  .handleAction(success, (_state, { payload }) => {
    const paid = payload.filter(item => item.status === 'PAID')
    const due = payload.filter(item => item.status === 'DUE')
      .sort(sortDate)
      .map((item, index, array) => {
        if (index > 0) {
          return !array[index - 1].checked ? { ...item, disabled: true } : item
        }
        return item
      })
    
    const outstanding = payload.filter(item => item.status === 'OUTSTANDING')
      .sort(sortDate)
      .map((item, index, array) => {
        if (index > 0) {
          return !array[index - 1].checked ? { ...item, disabled: true } : item
        } else {
          const dueOrderIsFullChecked = due.every(item => item.checked)
          return !dueOrderIsFullChecked ? { ...item, disabled: true } : item
        }
      })
    return [
      ...paid,
      ...due,
      ...outstanding
    ]
  })

export default combineReducers({ 
  ...asyncReducer(action),
  data,
})
