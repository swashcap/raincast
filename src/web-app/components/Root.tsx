/* global API_URL,Headers,fetch */
import React, { Component } from 'react'
import { Button, Box } from 'grommet'
import { History } from 'history'
import { Store } from 'redux'

import { Root as SharedRoot } from '../../shared/containers/Root'

export interface RootProps {
  history: History
  store: Store
}

export interface RootState {
  routes: any
}

class Root extends Component<RootProps, RootState> {
  constructor(props: RootProps) {
    super(props)

    this.state = {
      routes: null,
    }

    this.postRoute = this.postRoute.bind(this)
  }

  componentWillMount() {
    fetch(`${API_URL}/routes`)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Error with request: ${response.status} ${response.statusText}`
          )
        }

        return response.json()
      })
      .then(routes => this.setState({ routes }))
      .catch(error => {
        console.error(error)
      })
  }

  postRoute(routeId) {
    fetch(`${API_URL}/routes/active`, {
      body: JSON.stringify({
        active: routeId,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Error with request: ${response.status} ${response.statusText}`
          )
        }

        return response.json()
      })
      .then(({ active }) => {
        this.setState({
          routes: Object.keys(this.state.routes).reduce((memo, routeId) => {
            memo[routeId] = {
              active: routeId === active,
              name: this.state.routes[routeId].name,
            }
            return memo
          }, {}),
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { history, store } = this.props
    const { routes } = this.state
    let content

    if (routes) {
      content = Object.keys(routes).map(routeId => {
        const route = routes[routeId]
        return (
          <Box align="center" key={routeId} pad="small">
            <Button
              label={route.name}
              onClick={() => this.postRoute(routeId)}
              primary={!!route.active}
            />
          </Box>
        )
      })
    }

    return (
      <SharedRoot history={history} store={store}>
        <Box pad="small">{content}</Box>
      </SharedRoot>
    )
  }
}

export default Root
