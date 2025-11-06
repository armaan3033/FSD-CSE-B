import React from 'react'

const navbar = () => {
  return (
    <div>
      <h1>User Dashboard</h1>
      <link to="/">Home</link>
      <link to="/login">Login</link>
      <link to="/register">Register</link>
      <link to="/cart">Cart</link>
      <link to="/order">Order</link>
    </div>
  )
}

export default navbar
