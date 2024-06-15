import React from 'react'

const WeatherInfo = ({weatherData}) => {
  const {name, main, weather, wind} = weatherData
  const date = new Date()

  return (
    <div className="weather-info">
      <p>Location: {name}</p>
      <p>Temperature: {main.temp} °C</p>
      <p>Date & Time: {date.toLocaleString()}</p>
      <p>Weather: {weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  )
}

export default WeatherInfo
