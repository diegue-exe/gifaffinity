import { GifModel } from '../models/GifModel'

const apiUrl = 'http://localhost:3000'

export const fetchGifs = async () => {
  const response = await fetch(
    `${apiUrl}/api/memes
  `,
    { mode: 'cors' },
  )
  const gifsResponse: GifModel[] = await response.json()
  return gifsResponse
}
