import './SearchBar.css'
import searchButton from '../../../assets/images/elements/searchButton.svg'
import { ChangeEvent } from 'react'

export const SearchBar = ({ setKeyword }: { setKeyword: any }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }
  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      setKeyword(event.target.value)
    }
  }

  return (
    <div className="search-container">
      <input
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        type="text"
        className="searchBar"
        placeholder="¿Qué quieres buscar? ¡Encuentralo!"
      />
      <img src={searchButton} alt="search icon" className="icon" />
    </div>
  )
}
