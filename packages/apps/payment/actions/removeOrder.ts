import { ActionType, createAction } from 'typesafe-actions'
import { TOrder } from '../schemas'

const action = createAction('REMOVE_ORDER')<TOrder>()

export type TAction = ActionType<typeof action>

export default action
