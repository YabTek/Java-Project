import React from 'react'
import './MovieList.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Movies from '../Movies/Movies';

const MovieList = ({movie}) => {
  return (
    <div className = "movie-list">
      <span className = "description">{movie.title}</span>
       <div className='holder'>
        {movie.content.map((film) => (<Movies film = {film}/>
))}
       
       </div>
    </div>
  )
}

export default MovieList
