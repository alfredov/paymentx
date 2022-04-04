import { ActionType, createAction } from 'typesafe-actions'

const action = createAction('ADD_ORDER')<{ id: string, price: number }>()

export type TAction = ActionType<typeof action>

export default action
