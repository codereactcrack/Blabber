import React from 'react'
import Logo from '../../assets/images/Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import  './css/ChatHeader.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatHeader = () => {
  return (
    <div className='chat-header'>
      <div className='chat-logo'>
        <img src={Logo} className='logo'/>
        <div className='logo-heading'>BLABBER</div>
      </div>
      <div className='chat-search'>
        <SearchIcon />
        <input type='text' placeholder='Search'/>
      </div>
      <div className='chat-notification-bar'>
        <NotificationsIcon/>
        <div className="profile-icon">
          <AccountCircleIcon/>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader