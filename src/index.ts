import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
const app = new Hono()
app.use(
  cors({
    origin:"http://localhost:4000",
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH','OPTIONS'],
  })
)
app.get('/', (c) => {
  return c.text('Hello Archana!')
})
serve(app, ({port}) => {
  console.log(`Server running at http://localhost:${port}`)
}
)









