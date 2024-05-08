import { FastifyInstance } from 'fastify'

export async function appRoutes(app: FastifyInstance) {
  app.get('/health-check', async () => {
    return { status: 'I am alive!' }
  })
}