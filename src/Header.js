import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
         <MenuIcon />
        </IconButton> 
        <img
          src="./images/Gmail.png"alt='' />
      </div>

      <div className='header__middle'>
         <SearchIcon />
         <input placeholder='Search mail' type='text' />
         
      </div>

      <div className='header__right'>
        <IconButton>
         <AppsIcon />
        </IconButton>
         
        <IconButton>
         <NotificationsIcon />
        </IconButton>
        <div className='Avatar'>
            <Avatar
              src="./images/john-muleka.jpeg"alt='J'
            />
        </div>
        
      </div>
    </div>
  );
}

export default Header
