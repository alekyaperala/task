import React from 'react'

const DarkModeToggle = ({isDarkMode, setIsDarkMode}) => (
  <button className="toggle-button" onClick={() => setIsDarkMode(!isDarkMode)}>
    Toggle Dark Mode
  </button>
)

export default DarkModeToggle
