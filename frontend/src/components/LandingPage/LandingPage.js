import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className = "landing-page">
       <img src = {require('../../images/bg.png')} alt = "" className = "landing-img"/>
     
    <div className = "title">
    <img src = {require('../../images/title.jpg')} alt = "" className = "title-img"/>

    <div className = "buttons">
        <button className = "play"><PlayArrowIcon/>
        <span>play</span>
        </button>
        <button className = "more-info"><InfoOutlinedIcon/>
        <span>More info</span>
        </button>
      
    </div>
    </div>
    <div>    
      <p className = " subtitle">We must have a party</p>
    </div>

    </div>

  )
}

export default LandingPage
