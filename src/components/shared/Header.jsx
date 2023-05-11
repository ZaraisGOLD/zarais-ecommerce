import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <h1><Link className='header__home' to='/'>e-commerce</Link></h1>
      <nav className='navbar'>
        <ul>
          <li className='navbar__list'><Link className='navbar__login' to='/login'>Login</Link></li>
          <li className='navbar__list'><Link className='navbar__register' to='/register'>Register</Link></li>
          <li className='navbar__list'><Link className='navbar__purchases' to='/purchases'>Purchases</Link></li>
          <li className='navbar__list'><Link className='navbar__cart' to='/cart'>Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header