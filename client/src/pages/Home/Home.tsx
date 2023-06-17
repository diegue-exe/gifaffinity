import React from 'react'
import '../../assets/styles/reset.css'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'
import { Header } from '../../components/atoms/Header'
import { SearchBar } from '../../components/atoms/SearchBar'
import arrow from '../../assets/images/elements/arrow.svg'
import useGifs from '../../hooks/useGifs'
import payaso from '../../assets/images/elements/payaso.png'

const Home = () => {
  const { gifs, isLoading, hasError } = useGifs()

  if (isLoading) {
    return (
      <div className="fullscreen-container">
        <span className="loader"></span>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="fullscreen-container">
        <h2 className="header-text">No hay GIFs</h2>
        <img src={payaso} alt="payaso" width={150} height={150} />
      </div>
    )
  }

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

export default Home
