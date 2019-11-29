import React from 'react'
import { createHashHistory } from 'history'
import { render } from 'react-dom'

import Root from './components/Root'
import { configureStore } from './configureStore'

const history = createHashHistory()
const store = configureStore(history)

render(<Root history={history} store={store} />, document.getElementById('app'))
