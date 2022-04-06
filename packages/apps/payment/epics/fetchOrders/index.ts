import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import action,{ TAction, TSuccess } from '../../actions/fetchOrders'

export const fetchOrdersEpic = (
  action$: ActionsObservable<TAction>
) => action$.pipe(
  filter(isActionOf(action.request)),
  switchMap(({ payload }) =>
    ajax.getJSON<TSuccess>('/api/orders').pipe(
      mergeMap(response => of(action.success(
        response.map(item => ({
          ...item,
          checked: false,
          disabled: true,
        }))
      ))),
      catchError((error: AjaxError) => of(action.failure(error.message)))
    )
  )
)
