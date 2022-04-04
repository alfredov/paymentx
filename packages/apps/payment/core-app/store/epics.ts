import { combineEpics } from 'redux-observable'

import { epics } from '../../epics'

export const createRootEpic = () => combineEpics(...epics)
