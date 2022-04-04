import { createAsyncAction, ActionType } from 'typesafe-actions'

export type TSuccess = {
  id: string,
  name: string,
  price: string,
  priceCurrency: 'MXN',
  due: string,
  status: 'PAID' | 'DUE' | 'OUTSTANDING',
  interest: string | null,
  checked: boolean,
  disabled: boolean,
}[]

export type TRequest = { id: string }

const action = createAsyncAction(
  'FETCH_ORDERS/REQUEST',
  'FETCH_ORDERS/SUCCESS',
  'FETCH_ORDERS/FAILURE',
  'FETCH_ORDERS/CANCEL',
)<TRequest, TSuccess, string, undefined>()

export type TAction = ActionType<typeof action>

export default action