const getPort = require('get-port')

let port

module.exports = () => {
  if (port) {
    return Promise.resolve(port)
  }

  return getPort({ port: 3000 }).then((newPort) => {
    port = newPort
    return port
  })
}
