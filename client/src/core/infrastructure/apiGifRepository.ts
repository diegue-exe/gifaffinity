import { GifDTO } from './GifDTO'
import { GifRepository } from '../domain/GifRepository'
import { GifMapper } from './apiGifRepository.mapper'
import { GifModel } from '../domain/GifModel'

const apiUrl = 'http://localhost:3000'

export const apiGifRepository: GifRepository = {
  searchGifs: async function (search: string): Promise<GifModel[] | undefined> {
    const response = await fetch(`${apiUrl}/api/search?keyword=${search}`)
    const json = await response.json()
    const gifs: GifDTO[] = json.gifs
    const mappedGifs = GifMapper.map(gifs)

    return mappedGifs
  },
  getAllGifs: async function (): Promise<GifModel[] | undefined> {
    const response = await fetch(`${apiUrl}/api/gifs`)
    const json = await response.json()
    const gifs: GifDTO[] = json.gifs
    const mappedGifs = GifMapper.map(gifs)

    return mappedGifs
  },
}
