import { useEffect, useState } from 'react'

import { GifService } from '../services/Gif.service'
import { GifModel } from '../models/GifModel'

const useGifs = () => {
  const [gifs, setGifs] = useState<GifModel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      try {
        const memes = await GifService.fetch()
        if (memes !== undefined) {
          const mappedGifs = GifService.map(memes)
          setGifs(mappedGifs)
        }
      } catch {
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return { gifs, isLoading, hasError }
}

export default useGifs
