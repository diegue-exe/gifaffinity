import { apiGifRepository } from '../infrastructure/apiGifRepository'

export const GifService = {
  getGifs: async (keyword?: string) => {
    let gifs = keyword
      ? await apiGifRepository.searchGifs(keyword)
      : await apiGifRepository.getAllGifs()
    return gifs
  },
}
