import './SearchBar.css'
import searchButton from '../../../assets/images/elements/searchButton.svg'

export const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="searchBar"
        placeholder="¿Qué quieres buscar? ¡Encuentralo!"
      />
      <img src={searchButton} alt="search icon" className="icon" />
    </div>
  )
}
