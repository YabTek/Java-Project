import React from 'react'
import './MovieList.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Movies from '../Movies/Movies';

const MovieList = () => {
  return (
  

    <div className = "movie-list">
      <span className = "description">violent suspenseful tv shows</span>
       <div className='holder'>
        <Movies/>
        <Movies/>
        <Movies/>
        <Movies/>

        <Movies/>

       
       </div>
    </div>
  )
}

export default MovieList
