import cors from '@fastify/cors'
import fastify from 'fastify'
import { appRoutes } from './routes/app'

export const app = fastify()

app.register(cors, {
  origin: '*',
})

app.get('/', (request, reply) => {
  reply.send({ hello: 'fsdas' })
})

app.register(appRoutes, { prefix: 'app' })

app.listen({ port: 8000 }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})