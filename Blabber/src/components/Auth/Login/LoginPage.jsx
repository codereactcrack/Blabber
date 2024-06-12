import React from 'react'
import LoginEmail from './LoginEmail'
import LoginGoogle from '../Login/LoginGoogle'
import LoginGitHub from '../Login/LoginGitHub'
import { NavLink } from 'react-router-dom'
import Banner from '../../../assets/images/Banner.png'
import LoginX from './LoginX'
import Banner1 from '../../../assets/images/banner1.avif'

const LoginPage = () => {
  return (
    <div className='login-container'>
      <div className='login-left-banner'>
        <img src={Banner1} />
      </div>
      <div className='login-right-auth'>
        <div className='logo-heading'>
          <div className='logo'>
            <img src={Banner} alt='logo' />
          </div>
          <div className='heading'>
            <div className='primary-heading'>BLABBER</div>
            <div className='slogan'>Get Ready to Blab and Laugh!</div>
          </div>
        </div>
        <div className='email-auth'>
          <LoginEmail />
        </div>
        <div className='bottom-line'></div>
        <div className='social-auth'>
          <LoginGoogle />
          <LoginGitHub />
          <LoginX />
        </div>
        <div className='tos'>
          By creating account,you agree to our Terms of Service and Privacy Policy
        </div>
        <div className="register-user">
          Don't have an account ? <NavLink to='/sign-up'>Sign Up</NavLink>
        </div>
      </div>
    </div>
  )
}

export default LoginPage