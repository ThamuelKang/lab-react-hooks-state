import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <p key={index}>{item.name} is in your cart</p>
      ))}
    </div>
  )
}

export default Cart