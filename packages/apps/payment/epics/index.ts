import { fetchStudentEpic } from './fetchStudent'
import { fetchOrdersEpic } from './fetchOrders'
import { removeOrdeEpic } from './removeOrder'

export const epics = [
  fetchStudentEpic,
  fetchOrdersEpic,
  removeOrdeEpic,
]
