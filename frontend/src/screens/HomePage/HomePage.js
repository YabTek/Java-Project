import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'


const HomePage = () => {
  return (
    <div className = "home-main">
      <Header/>
      <img src = {require('../../images/bg.png')} alt = "" width = "100%"/>
    </div>
  )
}

export default HomePage
