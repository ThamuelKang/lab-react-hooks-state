import React from 'react'

function DarkModeToggle({ isDark, toggleDarkMode }) {
  
  const handleClick = () => {
    toggleDarkMode(!isDark)
  }

  return (
    <button  aria-label="toggle dark mode" role = "button" onClick={handleClick} className={isDark ? 'dark' : 'light'}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
