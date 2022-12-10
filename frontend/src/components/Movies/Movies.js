import {React,useState,  useEffect } from 'react'
import './Movies.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { NavItem } from 'react-bootstrap';
import axios from 'axios';

const Movies = ({film}) => {
  const [movie,setMovie] = useState({})

  const fetchMovie = async()=>{
      const movie = await axios.get("/movies/find/"+film)
      setMovie(movie.data)
  }

  useEffect(()=>{
     fetchMovie()
  },[film])
  return (
    <div className = "movies">
  
        <img src = {movie.img} alt = "" className = "movie-img"/>

    
    {/* <div className = "movie-info">
      <img src= "" alt = "" className = "movie-title"/>
    <div className = "icons">
    <button className = "play"><PlayArrowIcon/>
        <span>play</span>
        </button>
    <AddCircleOutlineOutlinedIcon/>
    <LocalFireDepartmentOutlinedIcon/>
    </div>
    <div>hello there</div>
    </div>  */}

    </div>
  )
}

export default Movies
