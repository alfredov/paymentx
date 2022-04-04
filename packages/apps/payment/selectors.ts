import { REDUCER_INDEX } from './constants'
import { RootState } from './reducers'

export const fetchStudent = (state: RootState) => state[REDUCER_INDEX].fetchStudent
