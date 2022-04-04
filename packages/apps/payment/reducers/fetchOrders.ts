import { combineReducers } from 'redux'

import { asyncReducer } from '../core-app/utils'
import action from '../actions/fetchOrders'

export default combineReducers({ ...asyncReducer(action) })
