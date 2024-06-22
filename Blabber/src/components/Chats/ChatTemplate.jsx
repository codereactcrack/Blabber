import React from 'react'
import FriendsList from './friends/FriendsList'      
import {Outlet} from 'react-router-dom'                                                                          

const ChatTemplate = () => {
  return (
    <div className='chatTemplate-container'>
      <div className='chatTemplate-sidebar'>
        <FriendsList />
      </div>
      <Outlet />
    </div>
  )
}

export default ChatTemplate