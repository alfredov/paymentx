import { createAsyncAction, ActionType } from 'typesafe-actions'

export type TSuccess = {
  firstName: string,
  lastName: string,
  cohort: string,
  schoolName: string,
  schoolLogo: string
}

export type TRequest = { id: string }

const action = createAsyncAction(
  'FETCH_STUDENT/REQUEST',
  'FETCH_STUDENT/SUCCESS',
  'FETCH_STUDENT/FAILURE',
  'FETCH_STUDENT/CANCEL',
)<TRequest, TSuccess, string, undefined>()

export type TAction = ActionType<typeof action>

export default action
