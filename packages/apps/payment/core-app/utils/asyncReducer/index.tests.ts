
import { createAsyncAction } from 'typesafe-actions'

import { asyncReducer } from './index'

describe('utils::asyncReducer', () => {
    const REQUEST_TYPE = 'ISLAND/ASYNC_REDUCER_TEST_REQUEST'
    const SUCCESS_TYPE = 'ISLAND/ASYNC_REDUCER_TEST_SUCCESS'
    const FAILURE_TYPE = 'ISLAND/ASYNC_REDUCER_TEST_FAILURE'
    const CANCEL_TYPE = 'ISLAND/ASYNC_REDUCER_TEST_CANCEL'

    type TRequest = { id: number }
    type TResponse = { response: { name: string }[] }

    const action = createAsyncAction(
      REQUEST_TYPE,
      SUCCESS_TYPE,
      FAILURE_TYPE,
      CANCEL_TYPE,
    )<TRequest, TResponse, string, undefined>()

    const reducerCombined = asyncReducer<
      TRequest,
      TResponse,
      typeof REQUEST_TYPE,
      typeof SUCCESS_TYPE,
      typeof FAILURE_TYPE,
      typeof CANCEL_TYPE
    >(action)

    it('data reducer should receive data when action success', () => {
      const initialState: TResponse = { response: [] }
      const responseData: TResponse = { response: [{ name: 'x1' }, { name: 'x2' }] }

      expect(
        reducerCombined.data(initialState, action.success(responseData)),
      ).toEqual(responseData)
    })

    it('data reducer should reset to  initialState when action cancel or failure', () => {
      expect(
        reducerCombined.data({ response: [] }, action.cancel()),
      ).toEqual(null)

      expect(
        reducerCombined.data({ response: [] }, action.failure('error')),
      ).toEqual(null)
    })

    it('data reducer should keep current state', () => {
      expect(
        reducerCombined.data({ response: [] }, action.request({ id: 456 })),
      ).toEqual({ response: [] })
    })

    it('error reducer should receive data when action failure', () => {
      expect(
        reducerCombined.error(null, action.failure('test_error')),
      ).toEqual('test_error')
    })

    it('error reducer should reset when action request or cancel', () => {
      expect(
        reducerCombined.error('test_error', action.request({ id: 45 })),
      ).toEqual(null)

      expect(
        reducerCombined.error('test_error', action.cancel()),
      ).toEqual(null)
    })

    it('error reducer should keep current state on success action', () => {
      expect(
        reducerCombined.error('current_test_error', action.success({ response: [] })),
      ).toEqual('current_test_error')
    })

    it('loaded reducer should be true when success action', () => {
      expect(
        reducerCombined.loaded(false, action.success({ response: [] })),
      ).toBe(true)
    })

    it('loaded reducer should reset when action request, failure or cancel', () => {
      expect(
        reducerCombined.loaded(true, action.request({ id: 456 })),
      ).toBe(false)

      expect(
        reducerCombined.loaded(false, action.failure('error')),
      ).toBe(false)

      expect(
        reducerCombined.loaded(true, action.cancel()),
      ).toBe(false)
    })

    it('loaded reducer should keep current state when unknown action', () => {
      expect(
        // @ts-ignore
        reducerCombined.loaded(true, () => ({ type: 'unknow_action' })),
      ).toBe(true)
    })

    it('loading reducer should be true when request action', () => {
      expect(
        reducerCombined.loading(false, action.request({ id: 789 })),
      ).toBe(true)
    })

    it('loading reducer should reset when action success, failure or cancel', () => {
      expect(
        reducerCombined.loading(true, action.success({ response: [] })),
      ).toBe(false)

      expect(
        reducerCombined.loading(false, action.failure('error')),
      ).toBe(false)

      expect(
        reducerCombined.loading(true, action.cancel()),
      ).toBe(false)
    })

    it('loading reducer should keep current state when unknown action', () => {
      expect(
        // @ts-ignore
        reducerCombined.loading(false, () => ({ type: 'unknow_action' })),
      ).toBe(false)
    })
})
