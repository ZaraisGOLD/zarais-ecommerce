import React from 'react'
import useAuthentication from '../hooks/useAuthentication'
import { Link } from 'react-router-dom'
import './styles/login.css'

const Login = () => {

  const { loginUser } = useAuthentication()

  const handleSubmit = e => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    const data = { email, password }

    loginUser(data)
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <h2 className='login__title'>Welcome!</h2>
      <h5 className='login__subtitle'>Enter your email and password to continue</h5>
      <div className='login__email'>
        <label className='login__label' htmlFor="email">Email</label>
        <input className='login__input' type="email" id='email' />
      </div>
      <div className='login__password'>
        <label className='login__label' htmlFor="password">Password</label>
        <input className='login__input' type="password" id='password' />
      </div>
      <button className='login__btn'>Login</button>
      <span>Don't have an account?</span>
      <Link to='/register'><i className='bx bxs-edit' ></i>Sign up</Link>
    </form>
  )
}

export default Login