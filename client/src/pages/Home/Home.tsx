import React, { useEffect, useState } from 'react'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'
import { GifModel } from '../../models/GifModel'
import { Header } from '../../components/atoms/Header'
import { SearchBar } from '../../components/atoms/SearchBar'

import { fetchGifs } from '../../services/fetchGifs'

const Home = () => {
  const [gifs, setGifs] = useState<GifModel[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true)

  const getGifs = async () => {
    const data = await fetchGifs()
    const mappedGifs = data.memes.map((gif) => {
      return {
        id: gif.id,
        url: gif.images.small.url,
        name: gif.title,
      }
    })
    setGifs(mappedGifs)
    setIsloading(false)
  }

  useEffect(() => {
    getGifs()
  }, [])

  if (isLoading) {
    return <p>Loading</p>
  }

  const hasGifs = gifs.length > 0

  if (hasGifs) {
    return (
      <div className="container">
        <Header />
        <div className="searchbar-container">
          <SearchBar />
        </div>
        <div className="gif-container">
          {gifs.map((gif) => (
            <Gif key={gif.id} route={gif.url} alt={gif.name} />
          ))}
        </div>
      </div>
    )
  }

  return <p>Error payaso</p>
}

export default Home
