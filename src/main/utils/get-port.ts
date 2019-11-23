import getPort from 'get-port'

let port

export default () => {
  if (port) {
    return Promise.resolve(port)
  }

  return getPort({ port: 3000 }).then((newPort) => {
    port = newPort
    return port
  })
}
