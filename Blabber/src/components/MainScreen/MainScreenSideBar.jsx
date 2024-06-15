import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import './css/MainScreenSideBar.css';

const MainScreenSideBar = () => {
  return (
    <div className='mainScreen-sidebar-container'>
      <ul className='mainScreen-sidebar-navigation'>
        <li className='mainScreen-navigation-item'>
          <NavLink to='/MainScreen/chat' className={({ isActive }) => (isActive ? 'active' : '')}>
            <ChatRoundedIcon />
            <div className="list-item">Chat</div>
          </NavLink>
        </li>
        <li className='mainScreen-navigation-item'>
          <NavLink to='/MainScreen/channels' className={({ isActive }) => (isActive ? 'active' : '')}>
            <Groups2RoundedIcon />
            <div className="list-item">Channels</div>
          </NavLink>
        </li>
        <li className='mainScreen-navigation-item'>
          <NavLink to='/MainScreen/profile' className={({ isActive }) => (isActive ? 'active' : '')}>
            <HomeRoundedIcon />
            <div className="list-item">Profile</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainScreenSideBar;
