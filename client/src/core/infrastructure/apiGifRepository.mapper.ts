import { GifModel } from '../domain/GifModel'
import { GifDTO } from './GifDTO'

export const GifMapper = {
  map: (gifs: GifDTO[]) => {
    return gifs.map((gif): GifModel => {
      return {
        id: gif.id,
        url: gif.images.small.url,
        name: gif.title,
      }
    })
  },
}
