import { REDUCER_INDEX } from './constants'
import { RootState } from './reducers'

export const fetchStudent = (state: RootState) => state[REDUCER_INDEX].fetchStudent

export const orders = (state: RootState) => {
  const orders = state[REDUCER_INDEX].fetchOrders.data
  return orders ? ({
    paid: orders.filter(order => order.status === 'PAID'),
    due: orders.filter(order => order.status === 'DUE'),
    outstanding: orders.filter(order => order.status === 'OUTSTANDING')
  }) : ({
    paid: [],
    due: [],
    outstanding: []
  })
}
