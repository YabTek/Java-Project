import React from 'react'
import './HomePage.css'
import Header from '../../components/Header/Header'
import LandingPage from '../../components/LandingPage/LandingPage'
import MovieList from '../../components/MovieList/MovieList'


const HomePage = () => {
  return (
    <div className = "home-main">
      <Header/>
      <LandingPage/>
      <MovieList/>
      <MovieList/>
      <MovieList/>
      <MovieList/>

    </div>
  )
}

export default HomePage
