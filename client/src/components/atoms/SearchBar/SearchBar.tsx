import './SearchBar.css'
import searchIcon from '../../../assets/images/elements/searchIcon.svg'

export const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="searchBar"
        placeholder="¿Que quieres buscar? ¡Encuéntralo!"
      />
      <img src={searchIcon} alt="search icon" className="icon" />
    </div>
  )
}
