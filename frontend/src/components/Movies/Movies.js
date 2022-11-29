import React from 'react'
import './Movies.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
const Movies = () => {
  return (
    <div className = "movies">
      <img src = {require('../../images/pic.png')} alt = "" className = "movie-img"/>
    <div className = "movie-info">
      <img src= {require('../../images/title.jpg')} alt = "" className = "movie-title"/>
    <div className = "icons">
    <button className = "play"><PlayArrowIcon/>
        <span>play</span>
        </button>
    <AddCircleOutlineOutlinedIcon/>
    <LocalFireDepartmentOutlinedIcon/>
    </div>
    <div>bull-winder about getting right with Jesus or turning myself in.</div>
    </div> 

    </div>
  )
}

export default Movies
