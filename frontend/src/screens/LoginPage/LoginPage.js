import React from 'react'
import './LoginPage.css'
import { useState,useRef } from 'react'

const LoginPage = () => {
  

  return (
    <div className = "login">
      <div className = "head">
        <div className = "wrap">
        <img className = "logo" src = {require('../../images/logo.png')}/>
        </div>
      </div>
      <div className = "container">
        <form className="form"><h1>Sign in</h1>
          <input type = "email" placeholder="Email or phone number"/>
          <input type = "password" placeholder="password"/>
          <button className="login-button">Sign in</button>
          <span>New to netflix? 
            <b>Sign up</b>
          </span>

        </form>
        
    </div>
    </div>
  )
}

export default LoginPage
