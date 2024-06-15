import React from 'react'
import FriendsList from './FriendsList'
import ChatBox from './ChatBox'
import './css/ChatBox.css'                                                                                  

const ChatTemplate = () => {
  return (
    <div className='chatTemplate-container'>
      <div className='chatTemplate-sidebar'>
        <FriendsList />
      </div>
      <div className='chatBox-container'>
        <ChatBox />
      </div>
    </div>
  )
}

export default ChatTemplate