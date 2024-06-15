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
          </NavLink>
        </li>
        <li className='mainScreen-navigation-item'>
          <NavLink to='/MainScreen/channels' className={({ isActive }) => (isActive ? 'active' : '')}>
            <Groups2RoundedIcon />
          </NavLink>
        </li>
        <li className='mainScreen-navigation-item'>
          <NavLink to='/MainScreen/profile' className={({ isActive }) => (isActive ? 'active' : '')}>
            <HomeRoundedIcon />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainScreenSideBar;
