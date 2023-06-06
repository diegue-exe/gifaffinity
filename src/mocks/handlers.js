// src/mocks/handlers.js
import { rest } from 'msw'

const apiPath = 'https://mis-gifs.com'

export const handlers = [
  rest.get(`${apiPath}/gifs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{
        id: 'fsdfdssfd',
        url: 'https://mis-gifs...',
        name: 'bob es...'
      }]),
    )
  }),
]
