import { useEffect, useState } from 'react'
import { GifService } from '../services/Gif.service'
import { GifModel } from '../models/GifModel'

const useGifs = ({ keyword }: { keyword: string }) => {
  const [gifs, setGifs] = useState<GifModel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [loadError, setLoadError] = useState<boolean>(false)
  const [emptySearch, setEmptySearch] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      let gifs: GifModel[]
      try {
        gifs = await GifService.getGifs(keyword)
        setGifs(gifs)
        const hasGifs = gifs.length > 0
        if (!hasGifs) {
          setEmptySearch(true)
        } else {
          setEmptySearch(false)
        }
      } catch (error) {
        setLoadError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [keyword])

  return { gifs, isLoading, loadError, emptySearch }
}

export default useGifs
