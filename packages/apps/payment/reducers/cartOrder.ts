
import { createReducer } from 'typesafe-actions'

import { TOrder } from '../schemas'
import addOrder, { TAction as TAddOrdeAction } from '../actions/addOrder'
import removeOrder, { TAction as TRevemoOrderAction } from '../actions/removeOrder'

type TState = {
  total: number,
  items: TOrder[]
}

type TActions = TAddOrdeAction | TRevemoOrderAction
export const cartOrder = createReducer<TState, TActions>({ total: 0, items: [] })
  .handleAction(addOrder, (state, { payload }) => {
    const items = [
      ...state.items,
      payload
    ]
    return {
      items,
      total: items.reduce((acc, val) => acc + val.price, 0)
    }
  })
  .handleAction(removeOrder.request, (state, { payload }) => {
    const uncheckedIndex = state.items.findIndex(item => item.id === payload.id)
    if (uncheckedIndex !== -1) {
      const items = state.items.slice(0, uncheckedIndex)
      return {
        items,
        total: items.reduce((acc, val) => acc + val.price, 0)
      }
    }
    return state
  })
