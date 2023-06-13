import { GifDTO } from '../models/GifDTO'
type Response = { memes: GifDTO[] }

const apiUrl = 'http://localhost:3000'

export const fetchGifs = async () => {
  const response = await fetch(
    `${apiUrl}/api/memes
  `,
    { mode: 'cors' },
  )
  const gifsResponse: Response = await response.json()
  return gifsResponse
}
