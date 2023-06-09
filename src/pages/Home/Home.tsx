import React, { useEffect, useState } from 'react'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'
import { GifModel } from '../../models/GifModel'
import { Header } from '../../components/atoms/Header'
import { fetchGifs } from '../../services/fetchGifs'

const Home = () => {
  const [gifs, setGifs] = useState<GifModel[]>([])

  const getGifs = async () => {
    setGifs(await fetchGifs())
  }

  useEffect(() => {
    getGifs()
  }, [])

  const hasGifs = gifs.length > 0

  return (
    <div className="container">
      <Header />
      <div className="gif-container">
        {hasGifs ? (
          gifs.map((gif) => <Gif route={gif.url} alt={gif.name} />)
        ) : (
          <p>Error</p>
        )}
      </div>
    </div>
  )
}

export default Home
