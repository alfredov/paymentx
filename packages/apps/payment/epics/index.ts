import { fetchStudentEpic } from './fetchStudent'
import { fetchOrdersEpic } from './fetchOrders'

export const epics = [
  fetchStudentEpic,
  fetchOrdersEpic,
]
