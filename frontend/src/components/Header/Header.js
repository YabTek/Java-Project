import React from 'react'
import './Header.css'
import {Container,NavDropdown} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Header = () => {
  return (
    <div className = "header-main">
      <Container className="header" style = {{justifyContent:"space-between"}}>
        <div>
          <img src = {require('../../images/logo.png')} className = "logo" alt = ""
          />
          <span>home</span>
          <span>series</span>
          <span>movies</span>
          <span>new and popular</span>
          <span>my list</span>
        </div>
        <div className = "icons"> 
          <SearchIcon className='icon'/>
          <span>KID</span>
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
