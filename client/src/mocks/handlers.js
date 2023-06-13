// src/mocks/handlers.js
import { rest } from 'msw'

const apiPath = 'https://localhost:3000'

export const handlers = [
  rest.get(`${apiPath}/trending`, (req, res, ctx) => {
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
        {
          id: 'AAA004',
          url: 'https://media1.giphy.com/media/9IRX12VhoXoR2/giphy.gif?cid=ecf05e47wu94i2prljub7mcvvegcytz6tb9vj118sllr2n5m&ep=v1_gifs_search&rid=giphy.gif&ct=g',
          name: 'perrito explosivo',
        },
        {
          id: 'AAA005',
          url: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTdhYzM1MDJmMTVkYzE0M2U5OWZkNjhmMGE3MGE1OWY3NDZkNTc4NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/Qfsx3YWNr2j3N7odCH/giphy.gif',
          name: 'argentina',
        },
        {
          id: 'AAA006',
          url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2IwODEyMjZmOGY4MjBiZGI4ZDEyNTVhNjAzYThhYzYzMDdjNmJkNCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/pKPbddZ0OSoik/giphy.gif',
          name: 'not stewie',
        },
      ]),
    )
  }),
]
