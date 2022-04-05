import { ActionType, createAsyncAction } from 'typesafe-actions'
import { TOrder } from '../schemas'


const action = createAsyncAction(
  'REMOVE_ORDER/REQUEST',
  'REMOVE_ORDER/SUCCESS',
  'REMOVE_ORDER/FAILURE',
  'REMOVE_ORDER/CANCEL',
)<TOrder, undefined, string, undefined>()

export type TAction = ActionType<typeof action>

export default action
