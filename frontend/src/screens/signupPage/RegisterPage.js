import React from 'react'
import './RegisterPage.css'
import { useState,useRef } from 'react'

const RegisterPage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleClick = () =>{
       setEmail(emailRef.current.value)
  }
  const handlepassClick = () =>{
    setPassword(passwordRef.current.value)
}


  return (
    <div className = "signup">
      <div className = "head">
        <div className = "wrap">
        <img className = "logo" src = {require('../../images/logo.png')}/>
        <button className = "signin">Sign in</button>
        </div>
      </div>
      <div className = "container">
        <h1 className = "heading1">Unlimited movies, Tv shows and more.</h1>
        <h2 className = "heading2">Watch anywhere,Cancel anytime</h2>
        <p>Ready to watch? enter your email to create or restart your membership</p>
        {!email ? (
          <div className = "forms">
          <input className = "input" type = "email" placeholder = "email address" ref = {emailRef}/>
          <button className='signup-button' onClick = {handleClick}>Get started</button>
      </div>) : 
          (
          <form className = "forms">
          <input className = "input" type = "password" placeholder = "password" ref = {passwordRef}/>
          <button className='signup-button' onClick = {handlepassClick}>Start membership</button>
      </form>)}
        
    </div>
    </div>
  )
}

export default RegisterPage
