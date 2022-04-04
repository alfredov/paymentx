import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import action,{ TAction, TSuccess } from '../actions/fetchOrders'

export const fetchOrdersEpic = (
  action$: ActionsObservable<TAction>
) => action$.pipe(
  filter(isActionOf(action.request)),
  switchMap(({ payload }) =>
    ajax.getJSON<TSuccess>(
      `http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/${payload.id}/orders/`,
      { hash: 'OcJn4jYChW' }
    ).pipe(
      mergeMap(response => of(action.success(response))),
      catchError((error: AjaxError) => of(action.failure(error.message)))
    )
  )
)
