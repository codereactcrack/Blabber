import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './css/FriendsList.css';

const FriendsList = () => {
  return (
    <div className='friends-list-container'>
      <div className='chat-heading'>Chats</div>
      <div className='search-friends'>
        <SearchRoundedIcon />
        <input type='text' placeholder='Search..'/>
      </div>
      <div className='bottom-line'></div>
      <div className='friends-list'></div>
    </div>
  )
}

export default FriendsList