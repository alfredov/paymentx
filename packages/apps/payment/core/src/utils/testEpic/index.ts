import { Epic, ActionsObservable, StateObservable } from 'redux-observable'
import { AnyAction } from 'redux'
import { Subject } from 'rxjs'
import { take, toArray } from 'rxjs/operators'

export const testEpic = (
  epic: Epic,
  count: number,
  inputAction: AnyAction,
  // eslint-disable-next-line @typescript-eslint/ban-types
  state: {},
  callback: (actions: AnyAction[]) => void,
  // eslint-disable-next-line @typescript-eslint/ban-types
  dependencies: {} = {},
) => {
  const actions = new Subject<AnyAction>()
  const actions$ = new ActionsObservable(actions)
  const state$ = new StateObservable(new Subject(), state)
  epic(actions$, state$, dependencies)
    .pipe(take(count), toArray())
    .subscribe(callback)
  actions.next(inputAction)
}
