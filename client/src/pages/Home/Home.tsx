import React, { useState } from 'react'
import '../../assets/styles/reset.css'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'
import { Header } from '../../components/atoms/Header'
import { SearchBar } from '../../components/atoms/SearchBar'
import arrow from '../../assets/images/elements/arrow.svg'
import useGifs from '../../hooks/useGifs'
import payaso from '../../assets/images/elements/payaso.png'

const Home = () => {
  const [keyword, setKeyword] = useState('')
  const { gifs, isLoading, loadError, emptySearch } = useGifs({ keyword })

  if (isLoading) {
    return (
      <div className="fullscreen-container">
        <span className="loader"></span>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="fullscreen-container">
        <h2 className="header-text">No hay GIFs</h2>
        <img src={payaso} alt="payaso" width={150} height={150} />
      </div>
    )
  }

  if (emptySearch) {
    return (
      <div className="container">
        <Header />
        <div className="searchbar-container">
          <SearchBar setKeyword={setKeyword} />
        </div>
        <div className="text-container">
          <img src={arrow} alt="flecha" className="flecha" />
          <h2 className="header-text">Los guif más trendings del momento</h2>
        </div>
        {/* TODO extraer a componente */}
        <div className="error-container">
          <img src={payaso} alt="payaso" width={150} height={150} />
          <h2 className="header-text">
            No hay GIFs con la búsqueda '{keyword}'
          </h2>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Header />
      <div className="searchbar-container">
        <SearchBar setKeyword={setKeyword} />
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
