import React, { useContext } from 'react'
import UserContext from '../../context/AuthContext/UserContext'

const ChatRoom = () => {

  const {currentUser} = useContext(UserContext);

  return (
    <div>ChatRoom : - {currentUser && currentUser.email}</div>
  )
}

export default ChatRoom