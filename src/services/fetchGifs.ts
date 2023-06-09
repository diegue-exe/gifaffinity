import { GifModel } from '../models/GifModel'

export const fetchGifs = async () => {
  const response = await fetch('https://mis-gifs.com/gifs')
  const gifsResponse: GifModel[] = await response.json()
  return gifsResponse
}
