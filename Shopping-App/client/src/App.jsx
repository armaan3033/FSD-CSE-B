import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/login" element={<h1>Login Page</h1>}/>
        <Route path="/register" element={<h1>Register Here</h1>}/>
        <Route path="/cart" element={<h1>View Cart</h1>}/>
        <Route path="/order" element={<h1>Cart</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
