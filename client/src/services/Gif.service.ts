import { GifDTO } from '../models/GifDTO'
import { GifModel } from '../models/GifModel'

const apiUrl = 'http://localhost:3000'

export const GifService = {
  fetch: async () => {
    const response = await fetch(
      `${apiUrl}/api/memes
        `,
      { mode: 'cors' },
    )
    const gifsResponse = await response.json()
    const memes: GifDTO[] = gifsResponse.memes
    return memes
  },

  map: (data: GifDTO[]): GifModel[] => {
    return data.map((gif) => {
      return {
        id: gif.id,
        url: gif.images.small.url,
        name: gif.title,
      }
    })
  },
}
