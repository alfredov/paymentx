import { createReducer } from 'typesafe-actions'
import { combineReducers } from 'redux'

import action, { TSuccess, TAction } from '../actions/fetchStudent'

const { cancel, failure, request, success } = action

const data = createReducer<TSuccess | null, TAction>(null)
  .handleAction([failure, cancel], () => null)
  .handleAction(success, (_state, { payload }) => payload)

const error = createReducer<string | null, TAction>(null)
  .handleAction(failure, (_state, { payload }) => payload)
  .handleAction([request, cancel], () => null)

const loaded = createReducer<boolean, TAction>(false)
  .handleAction(success, () => true)
  .handleAction([request, failure, cancel], () => false)

const loading = createReducer<boolean, TAction>(false)
  .handleAction(request, () => true)
  .handleAction([failure, success, cancel], () => false)

export default combineReducers({
  data,
  error,
  loaded,
  loading,
})
