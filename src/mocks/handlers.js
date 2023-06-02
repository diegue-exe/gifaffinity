// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('/hello', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        text: 'Hello World',
      }),
    )
  }),
]
