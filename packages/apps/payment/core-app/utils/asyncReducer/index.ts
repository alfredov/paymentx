import {
  PayloadActionCreator,
  EmptyActionCreator,
  ActionType,
  getType,
} from 'typesafe-actions'

type TType = string
type TError = string

export function asyncReducer<
  TRequest,
  TResponse,
  TypeRequest extends TType,
  TypeSuccess extends TType,
  TypeFailure extends TType,
  TypeCancel extends TType
>(
  asyncAction: {
    request: PayloadActionCreator<TypeRequest, TRequest> | EmptyActionCreator<TypeRequest>,
    success: PayloadActionCreator<TypeSuccess, TResponse>,
    failure: PayloadActionCreator<TypeFailure, TError>,
    cancel: EmptyActionCreator<TypeCancel>,
  },
  initialState?: TResponse,
) {

  type TAction = ActionType<typeof asyncAction>
  const { cancel, success, failure, request } = asyncAction

  const dataReducer = (
    state: TResponse | null = initialState || null,
    action: TAction,
  ): TResponse | null => {
    switch(action.type) {
      case getType(success): {
        const { payload } = (action as ActionType<PayloadActionCreator<TypeSuccess, TResponse>>)
        return payload
      }
      case getType(cancel): return initialState || null
      case getType(failure): return initialState || null
      default:
        return state
    }
  }

  const errorReducer = (state: TError | null = null, action: TAction): TError | null => {
    switch(action.type) {
      case getType(failure): {
        const { payload } = action as ActionType<PayloadActionCreator<TypeFailure, TError>>
        return payload
      }
      case getType(request): return null
      case getType(cancel): return null
      default:
        return state
    }
  }

  const loadedReducer = (state = false, action: TAction): boolean => {
    switch(action.type) {
      case getType(success): return true
      case getType(request): return false
      case getType(failure): return false
      case getType(cancel): return false
      default: return state
    }
  }

  const loadingReducer = (state = false, action: TAction): boolean => {
    switch(action.type) {
      case getType(request): return true
      case getType(success): return false
      case getType(failure): return false
      case getType(cancel): return false
      default: return state
    }
  }

  return {
    data: dataReducer,
    error: errorReducer,
    loaded: loadedReducer,
    loading: loadingReducer,
  }
}
