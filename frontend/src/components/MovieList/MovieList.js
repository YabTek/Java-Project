import React from 'react'
import './MovieList.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Movies from '../Movies/Movies';

const MovieList = () => {
  return (
    <div className = "movie-list">
      <span className = "description">violent suspenseful tv shows</span>
       <div className = "holder"><ArrowBackIosIcon className = "back-icon"/>
       <div className='container'>
        <Movies/>
        <Movies/>
        <Movies/>
        <Movies/>       
         <Movies/>
         <Movies/>
         <Movies/>
         <Movies/>
         <Movies/>
         <Movies/>

         

       </div>
       <ArrowForwardIosIcon  className = "forward-icon"/>
       </div>
    
    </div>
  )
}

export default MovieList
