import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import action,{ TAction } from '../actions/fetchStudent'

export type TResponse = {
  fist_name: string,
  last_name: string,
  cohort: string,
  school: {
    name: string,
    logo: string
  }
}

export const fetchStudentEpic = (
  action$: ActionsObservable<TAction>
) => action$.pipe(
  filter(isActionOf(action.request)),
  switchMap(({ payload }) =>
    ajax.getJSON<TResponse>(
      `http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/${payload.id}`
    ).pipe(
      mergeMap(response => of(action.success({
        cohort: response.cohort,
        firstName: response.fist_name,
        lastName: response.last_name,
        schoolLogo: response.school.logo,
        schoolName: response.school.name
      }))),
      catchError((error: AjaxError) => of(action.failure(error.response.message || error.message)))
    )
  )
)
