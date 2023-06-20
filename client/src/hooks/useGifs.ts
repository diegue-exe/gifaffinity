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
        const gifs = await GifService.fetch()
        const hasGifs = gifs.length > 0
        if (hasGifs) {
          const mappedGifs = GifService.map(gifs)
          setGifs(mappedGifs)
        } else {
          setHasError(true)
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
