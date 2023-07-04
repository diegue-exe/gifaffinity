import { GifDTO } from '../models/GifDTO'
import { GifRepository } from '../domain/GifRepository'

const apiUrl = 'http://localhost:3000'

export const apiGifRepository: GifRepository = {
  searchGifs: async function (search: string): Promise<GifDTO[] | undefined> {
    const response = await fetch(`${apiUrl}/api/search?keyword=${search}`)
    const json = await response.json()
    const gifs: GifDTO[] = json.gifs
    return gifs
  },
  getAllGifs: async function (): Promise<GifDTO[] | undefined> {
    const response = await fetch(`${apiUrl}/api/gifs`)
    const json = await response.json()
    const gifs: GifDTO[] = json.gifs
    return gifs
  },
}
