import { GifDTO } from '../models/GifDTO'

export interface GifRepository {
  getAllGifs: () => Promise<GifDTO[] | undefined>
  searchGifs: (search: string) => Promise<GifDTO[] | undefined>
}
