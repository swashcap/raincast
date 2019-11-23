import thunk from 'redux-thunk'
import { History } from 'history'

import { electronMiddleware } from '../middleware/electron'
import { createStore } from '../../shared/store/createStore'
import rootReducer from '../reducers/index'

export interface State {}

export const configureStore = (history: History) =>
  createStore(history, rootReducer, '../reducers/index', [
    thunk,
    electronMiddleware,
  ])
