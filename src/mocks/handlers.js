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
          url: 'https://tenor.com/es/view/cat-cat-jumping-cat-excited-excited-dance-gif-19354605',
          name: 'happy happy cat',
        },
        {
          id: 'AAA002',
          url: 'https://tenor.com/es/view/spongebob-angry-annoyed-gif-12280503',
          name: 'bob esponja enfadado',
        },
        {
          id: 'AAA003',
          url: 'https://giphy.com/gifs/sad-pepe-pKPbddZ0OSoik',
          name: 'stewie',
        },
      ]),
    )
  }),
]
