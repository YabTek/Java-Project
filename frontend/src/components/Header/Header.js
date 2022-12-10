import React from 'react'
import './Header.css'
import {Container,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {
  return (
    <div className = "header-main">
      <Container className="header">
        <div>
          <img src = {require('../../images/logo.png')} className = "logo" alt = ""
          />
          <span>Home</span>
          <Link to = "/tvshows" className = "links"><span>Tv shows</span>
          </Link>
          <Link to = "/movies" className = "links"><span>Movies</span>
          </Link>
          <Link to = "/latest" className = "links"><span>Latest</span>
          </Link>
          <Link to = "/mylist" className = "links"><span>My list</span>
          </Link>
          <Link to = "/audioandSubtitle" className = "links"><span>Audio and subtitles</span>
          </Link>

         

        </div>
        <div className = "icons"> 
          <SearchIcon className='icon'/>
          <span>KID</span>
          <span>DVD</span>
          <NotificationsNoneIcon className='icon'/>
          <img src = {require('../../images/pic.png')} className = "profile-pic" alt = ""/>
          <NavDropdown title="" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">setting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>logout</NavDropdown.Item>
              
            </NavDropdown>
          
          {/* <div className = 'profile'>
          <ArrowDropDownIcon className = "icons"/>
          </div> */}
        </div>
        </Container>

    </div>

  )
}

export default Header
