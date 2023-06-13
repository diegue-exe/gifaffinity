import { GifModel } from '../models/GifModel'

const apiUrl = 'https://api.giphy.com/v1/gifs'

export const fetchGifs = async () => {
  const response =
    await fetch(`${apiUrl}/trending?api_key=rTaGOEssKwjrmLLOotkJbW3QD26ssdD3
  `)
  const gifsResponse: GifModel[] = await response.json()
  return gifsResponse
}
