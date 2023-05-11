import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {

  const [navbar, setNavbar] = useState(false)

  const handleNavbar = () => {
    setNavbar(!navbar)
  }

  return (
    <header className='header'>
      <h1><Link className='header__home' to='/'>e-commerce</Link></h1>
      <nav className='navbar'>
        <ul className={`navbar__container ${navbar ? 'open' : ''}`} >
          <li className='navbar__list'>
            <Link className='navbar__login' to='/login'>
              <i className='bx bx-lock-open-alt' ></i>Login</Link>
          </li>
          <li className='navbar__list'>
            <Link className='navbar__register' to='/register'>
              <i className='bx bxs-edit' ></i>Register</Link>
          </li>
          <li className='navbar__list'>
            <Link className='navbar__purchases' to='/purchases'>
              <i className='bx bx-shopping-bag' ></i>Purchases</Link>
          </li>
          <li className='navbar__list'>
            <Link className='navbar__cart' to='/cart'>
              <i className='bx bxs-cart' ></i>Cart</Link>
          </li>
        </ul>
      </nav>
      <i onClick={handleNavbar} className='bx bxs-dashboard'></i>
    </header>
  )
}

export default Header