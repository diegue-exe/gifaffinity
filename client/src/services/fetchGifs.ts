import { GifDTO } from '../models/GifDTO'

const apiUrl = 'http://localhost:3000'

export const fetchGifs = async () => {
  const response = await fetch(
    `${apiUrl}/api/memes
  `,
    { mode: 'cors' },
  )
  const gifsResponse = await response.json()
  const memes: GifDTO[] = gifsResponse.memes
  return memes
}
