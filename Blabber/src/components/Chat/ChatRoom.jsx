import React from 'react'
import { Outlet } from 'react-router-dom';
import ChatHeader from './ChatHeader'
import ChatSideBar from './ChatSideBar'

const ChatRoom = () => {

  return (
    <div className='chat-room-container'>
      <ChatHeader />
      <ChatSideBar />
      <Outlet />
    </div>
  )
}

export default ChatRoom