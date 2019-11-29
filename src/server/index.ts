import 'hard-rejection/register'

import fastify from 'fastify'
import fastifyCors from 'fastify-cors'
import fastifySensible from 'fastify-sensible'

import { apolloServer } from './plugins/apolloServer'

export const app = fastify({
  logger: true,
})

app.register(fastifyCors)
app.register(fastifySensible)
app.register(apolloServer)

if (require.main === module) {
  app.listen(3000, (error, address) => {
    if (error) {
      app.log.error(error)
      process.exit(1)
    }
  })
}
