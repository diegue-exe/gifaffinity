import { useEffect, useState } from 'react'
import { GifService } from '../services/Gif.service'
import { GifModel } from '../models/GifModel'
import { GifDTO } from '../models/GifDTO'

const useGifs = ({ keyword }: { keyword: string }) => {
  const [gifs, setGifs] = useState<GifModel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [loadError, setLoadError] = useState<boolean>(false)
  const [emptySearch, setEmptySearch] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      let gifs: GifDTO[]
      try {
        if (keyword === '') {
          gifs = await GifService.fetch()
        } else {
          gifs = await GifService.search(keyword)
        }
        const mappedGifs = GifService.map(gifs)
        setGifs(mappedGifs)

        const hasGifs = gifs.length > 0
        if (!hasGifs) {
          setEmptySearch(true)
        } else {
          setEmptySearch(false)
        }
      } catch {
        setLoadError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [keyword])

  return { gifs, isLoading, loadError, emptySearch }
}

export default useGifs
