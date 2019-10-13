const PropTypes = require('prop-types')
const React = require('react')
const { ConnectedRouter } = require('connected-react-router')
const { Grommet } = require('grommet')
const { Provider } = require('react-redux')
const { dark } = require('grommet/themes')

export default class Root extends React.Component {
  render () {
    const { children, history, store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Grommet full theme={dark}>
            <>

              {children}
            </>
          </Grommet>
        </ConnectedRouter>
      </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}
