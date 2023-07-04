import { GifModel } from './GifModel'

export interface GifRepository {
  getAllGifs: () => Promise<GifModel[] | undefined>
  searchGifs: (search: string) => Promise<GifModel[] | undefined>
}
