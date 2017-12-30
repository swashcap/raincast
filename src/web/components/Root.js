/* global fetch */
import React, { Component } from 'react'

import './Root.css'

class Root extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      routes: null
    }

    this.postRoute = this.postRoute.bind(this)
  }

  componentWillMount () {
    fetch('/routes')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error with request: ${response.status} ${response.statusText}`
          )
        }

        return response.json()
      })
      .then(routes => this.setState({ routes }))
      .catch((error) => {
        console.error(error)
      })
  }

  postRoute (routeId) {
    fetch('/routes/active', {
      body: JSON.stringify(routeId),
      method: 'POST'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error with request: ${response.status} ${response.statusText}`
          )
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const { routes } = this.state

    if (!routes) {
      return (
        <div className='Root Root-loading' />
      )
    }

    return (
      <div className='Root'>
        {Object.keys(routes).map((routeId) => {
          const route = routes[routeId]
          return (
            <button
              className={route.active ? 'is-active' : ''}
              key={routeId}
              onClick={() => this.postRoute(routeId)}
              type='button'
            >
              {route.name}
            </button>
          )
        })}
      </div>
    )
  }
}

export default Root
