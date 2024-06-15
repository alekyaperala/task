import React, {useState} from 'react'

const SearchBar = ({fetchWeather}) => {
  const [location, setLocation] = useState('')

  const handleSearch = () => {
    if (location.trim()) {
      fetchWeather(location)
      setLocation('')
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter city or zip code"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
