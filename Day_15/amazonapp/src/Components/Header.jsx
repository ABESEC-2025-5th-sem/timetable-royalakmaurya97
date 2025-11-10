import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img src='https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' alt='logo-here'/>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
            <Link to="product">Products</Link>
        </nav>
    </div>
  )
}

export default Header