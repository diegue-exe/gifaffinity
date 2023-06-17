import React, { useEffect, useState } from 'react'
import '../../assets/styles/reset.css'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'
import { GifModel } from '../../models/GifModel'
import { Header } from '../../components/atoms/Header'
import { SearchBar } from '../../components/atoms/SearchBar'
import arrow from '../../assets/images/elements/arrow.svg'
import { GifService } from '../../services/Gif.service'

const Home = () => {
  const [gifs, setGifs] = useState<GifModel[]>([])
  const [isLoading, setIsloading] = useState<boolean>(true)

  const updateStates = async () => {
    const data = await GifService.fetch()
    const mappedGifs: GifModel[] = GifService.map(data)
    setGifs(mappedGifs)
    setIsloading(false)
  }

  useEffect(() => {
    updateStates()
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
        <div className="text-container">
          <img src={arrow} alt="flecha" className="flecha" />
          <h2 className="header-text">Los guif más trendings del momento</h2>
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
