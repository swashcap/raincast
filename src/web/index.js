import React from 'react'
import { createHashHistory } from 'history'
import { render } from 'react-dom'

import Root from './components/Root'
import createStore from '../shared/store/createStore'

const history = createHashHistory()
const store = createStore(history)

render(<Root history={history} store={store} />, document.getElementById('app'))
