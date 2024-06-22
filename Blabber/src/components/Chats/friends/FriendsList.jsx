import React, { useContext, useState } from 'react';
import UserContext from '../../../context/AuthContext/UserContext';
import useFetchParticularUser from '../../../hooks/useFetchParticularUser';
import useFetchUser from '../../../hooks/useFetchUser';

import '../css/FriendsList.css';

const FriendsList = () => {
  const { currentUser } = useContext(UserContext);
  const currentUserInfoArray = useFetchParticularUser(currentUser);
  const userList = useFetchUser();

  const [searchText, setSearchText] = useState('');

  if (!currentUserInfoArray || currentUserInfoArray.length === 0 || !userList) {
    return <div>Loading...</div>;
  }

  const currentUserInfo = currentUserInfoArray[0];
  const friendsList = currentUserInfo.friendsList || [];

  const filteredFriendList = userList.filter(user => friendsList.includes(user.id) && 
                            user.userName.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className='friends-list-container'>
      <div className='search-friend'>
        <input type='text' placeholder='Search Friend...' 
          value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </div>
      <div className='friend-list'>
        {filteredFriendList.length === 0 ? (
          <p>No friends found</p>
        ) : (
          <ul>
            {filteredFriendList.map(friend => (
              <li key={friend.id} className='friend-item'>
                <img src={friend.profilePhoto} alt={friend.userName} className='friend-photo' />
                <p className='friend-name'>{friend.userName}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FriendsList;
