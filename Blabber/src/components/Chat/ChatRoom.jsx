import React, { useContext } from 'react'
import UserContext from '../../context/AuthContext/UserContext'

const ChatRoom = () => {

  const {currentUser} = useContext(UserContext);

  return (
    <div>ChatRoom : - {currentUser && currentUser.displayName}</div>
  )
}

export default ChatRoom