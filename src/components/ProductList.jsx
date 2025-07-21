import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Watermelon', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 4, name: 'Cheese', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ onAddToCart, selectedCategory }) => {

  const filteredProducts = selectedCategory === 'all' ?
    sampleProducts
    : sampleProducts.filter(product => {
      return product.category === selectedCategory
    }
    )



  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length === 0 && <h3>no products available</h3>}


      {/* TODO: Filter sample data using selected category */}
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}

export default ProductList
