import React from 'react'
import { createHashHistory } from 'history'
import { render } from 'react-dom'

import { Root } from './containers/Root'
import { configureStore } from './store/configureStore'

const history = createHashHistory()
const store = configureStore(history)

render(<Root history={history} store={store} />, document.getElementById('app'))
