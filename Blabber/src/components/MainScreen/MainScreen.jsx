import React from 'react'
import { Outlet } from 'react-router-dom';
import MainScreenHeader from './MainScreenHeader';
import MainScreenSideBar from './MainScreenSideBar';
import './css/MainScreen.css'

const MainScreen = () => {

  return (
    <div className='mainScreen-container'>
      <MainScreenHeader />
      <div className='mainScreen-flex'>
        <MainScreenSideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default MainScreen