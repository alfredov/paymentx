import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import { delay, filter, mergeMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import action,{ TAction } from '../actions/removeOrder'

export const removeOrdeEpic = (
  action$: ActionsObservable<TAction>
) => action$.pipe(
  filter(isActionOf(action.request)),
  delay(0),
  mergeMap(() => of(action.success())),
)
