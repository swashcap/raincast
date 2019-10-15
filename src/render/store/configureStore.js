import thunk from 'redux-thunk'

import { electronMiddleware } from '../middleware/electron'
import { createStore } from '../../shared/store/createStore'
import rootReducer from '../reducers/index'

export const configureStore = (history) => createStore(
  history,
  rootReducer,
  () => require('../reducers/index').rootReducer,
  [thunk, electronMiddleware]
)
