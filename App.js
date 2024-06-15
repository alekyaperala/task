import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import WeatherInfo from './components/WeatherInfo'
import DarkModeToggle from './components/DarkModeToggle'
import './App.css'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const fetchWeather = async location => {
    const API_KEY = '492e445b25a93a25d19f6447d9bc4f91'
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`,
      )
      if (!response.ok) {
        throw new Error('Location not found')
      }
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <h1>Weather App</h1>
      <SearchBar fetchWeather={fetchWeather} />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}

export default App
