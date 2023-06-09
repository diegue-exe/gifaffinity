// src/mocks/handlers.js
import { rest } from 'msw'

const apiPath = 'https://mis-gifs.com'

export const handlers = [
  rest.get(`${apiPath}/gifs`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 'AAA001',
          url: 'https://media.tenor.com/arqlNu8gyJYAAAAC/cat-cat-jumping.gif',
          name: 'happy happy cat',
        },
        {
          id: 'AAA002',
          url: 'https://media.tenor.com/oeMHiLW62hAAAAAd/pretty-please-kitty-softpaws.gif',
          name: 'gatito',
        },
        {
          id: 'AAA003',
          url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2IwODEyMjZmOGY4MjBiZGI4ZDEyNTVhNjAzYThhYzYzMDdjNmJkNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/pKPbddZ0OSoik/giphy.gif',
          name: 'stewie',
        },
      ]),
    )
  }),
]
