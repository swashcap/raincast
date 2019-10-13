/* global Headers,fetch */
import React, { Component } from 'react'

import SharedRoot from '../../shared/containers/Root'

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
      body: JSON.stringify({
        active: routeId
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
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
    const { history, store } = this.props
    const { routes } = this.state
    // let content = <div className='Root Root-loading' />

    // if (routes) {
    //   content = (
    //     Object.keys(routes).map((routeId) => {
    //       const route = routes[routeId]
    //       return (
    //         <button
    //           className={route.active ? 'is-active' : ''}
    //           key={routeId}
    //           onClick={() => this.postRoute(routeId)}
    //           type='button'
    //         >
    //           {route.name}
    //         </button>
    //       )
    //     })
    //   )
    // }

    return (
      <SharedRoot history={history} store={store}>
        {/* <div>wat</div> */}
      </SharedRoot>
    )
  }
}

export default Root
