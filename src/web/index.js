import React from 'react'
import { render } from 'react-dom'

import Root from './components/Root'

import '../shared/styles/main.css'

if (!document.getElementById('app')) {
  const el = document.createElement('div')
  el.id = 'app'
  document.body.appendChild(el)
}

render(
  <Root />,
  document.getElementById('app')
)
