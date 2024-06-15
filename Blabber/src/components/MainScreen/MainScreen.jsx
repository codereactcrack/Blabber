import React from 'react'
import { Outlet } from 'react-router-dom';
import MainScreenHeader from './MainScreenHeader';
import MainScreenSideBar from './MainScreenSideBar';


const MainScreen = () => {

  return (
    <div className='mainScreen-container'>
      <MainScreenHeader />
      <MainScreenSideBar />
      <Outlet />
    </div>
  )
}

export default MainScreen