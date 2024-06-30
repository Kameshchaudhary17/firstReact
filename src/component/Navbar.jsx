import React from 'react'
import './Navbar.css'
import Button from './Button'

const Navbar = () => {
  return (
    <nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Product</li>
    </ul>
    <div className="btn">
    <Button text = 'Sign up'/>
    <Button text = 'Login'/>
    </div>
   </nav>
  )
}

export default Navbar
