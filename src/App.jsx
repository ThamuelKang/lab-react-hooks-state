import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {

  // Dark mode logic
  const [darkMode, setDarkMode] = useState(false)

  // TODO: Implement state for cart management
  const [cartState, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(previousCart => {
      return [...previousCart, product];
    });
  };

  // TODO: Implement state for category filtering
  const [filteredState, setFilter] = useState('all')


  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDark={darkMode} toggleDarkMode={setDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(event) => setFilter(event.target.value)} value={filteredState}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList onAddToCart={addToCart} selectedCategory={filteredState} />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartState} />
    </div >
  )
}

export default App
