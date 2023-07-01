import { GifDTO } from '../models/GifDTO'
import { GifModel } from '../models/GifModel'

const apiUrl = 'http://192.168.2.19:3000'

const mapGifs = (gifs: GifDTO[]) => {
  return gifs.map((gif): GifModel => {
    return {
      id: gif.id,
      url: gif.images.small.url,
      name: gif.title,
    }
  })
}

const getAllGifs = async () => {
  const response = await fetch(`${apiUrl}/api/gifs`)
  const json = await response.json()
  const gifs: GifDTO[] = json.gifs
  return gifs
}

const searchGifs = async (search: string) => {
  const response = await fetch(`${apiUrl}/api/search?keyword=${search}`)
  const json = await response.json()
  const gifs: GifDTO[] = json.gifs
  return gifs
}

export const GifService = {
  getGifs: async (keyword?: string) => {
    let gifs = keyword ? await searchGifs(keyword) : await getAllGifs()
    return mapGifs(gifs)
  },
}
