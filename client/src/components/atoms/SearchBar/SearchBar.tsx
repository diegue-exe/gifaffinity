import './SearchBar.css'
import searchButton from '../../../assets/images/elements/searchButton.svg'

export const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="searchBar" placeholder="Pero de chill" />
      <img src={searchButton} alt="search icon" className="icon" />
    </div>
  )
}
