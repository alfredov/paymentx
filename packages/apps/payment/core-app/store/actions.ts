import { ActionType } from 'typesafe-actions'

import * as actions from '../../actions'

export const rootAction = {
  ...actions,
}

export type RootAction = ActionType<typeof rootAction>
