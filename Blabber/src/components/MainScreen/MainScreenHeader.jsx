import React from 'react'
import Logo from '../../assets/images/Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import  './css/MainScreenHeader.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const MainScreenHeader = () => {
  const navigate = useNavigate();
  function logoutHandler(){
    signOut(auth);
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className='chat-header'>
      <div className='chat-logo' onClick={()=>navigate('/app')}>
        <img src={Logo} className='logo'/>
        <div className='logo-heading'>BLABBER</div>
      </div>
      <div className='chat-search'>
        <SearchIcon />
        <input type='text' placeholder='Search'/>
      </div>
      <div className='chat-notification-bar'>
        <NotificationsIcon/>
        <div className="logout-icon" onClick={logoutHandler}>
          <LogoutRoundedIcon />
        </div>
      </div>
    </div>
  )
}

export default MainScreenHeader