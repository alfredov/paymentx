import { ActionsObservable } from 'redux-observable'
import { of } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'
import { catchError, filter, mergeMap, switchMap } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'

import action,{ TAction } from '../actions/fetchStudent'

export type TResponse = {
  first_name: string,
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
    ajax.getJSON<TResponse>('/api/student').pipe(
      mergeMap(response => of(action.success({
        cohort: response.cohort,
        firstName: response.first_name,
        lastName: response.last_name,
        schoolLogo: response.school.logo,
        schoolName: response.school.name
      }))),
      catchError((error: AjaxError) => of(action.failure(error.message)))
    )
  )
)
