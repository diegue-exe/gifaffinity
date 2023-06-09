import React, { useEffect, useState } from 'react'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'
import { Header } from '../../components/atoms/Header'
import { SearchBar } from '../../components/atoms/SearchBar'

interface Gif {
  id: string
  url: string
  name: string
}

const Home = () => {
  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch('https://mis-gifs.com/gifs')
      const gifsResponse: Gif[] = await response.json()
      setGifs(gifsResponse)
    }
    getGifs()
  }, [])

  return (
    <div className="container">
      <Header />
    {/* <SearchBar /> */}
      <div className="gif-container">
        {gifs.map((gif) => (
          <Gif route={gif.url} alt={gif.name} />
        ))}
      </div>
    </div>
  )
}

export default Home
