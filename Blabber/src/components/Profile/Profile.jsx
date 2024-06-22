import React, { useContext } from 'react';
import UserContext from '../../context/AuthContext/UserContext';
import useFetchUser from '../../hooks/useFetchUser';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import useFetchParticularUser from '../../hooks/useFetchParticularUser';
import './css/Profile.css';

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  const usersList = useFetchUser();
  const current = useFetchParticularUser(currentUser);
  const filteredList = usersList.filter(data => data.userEmail !== currentUser.email);

  async function addFriendHandler(id) {
    const docRef = doc(db, 'users', current[0].id);
    const newFriends = current[0].friendsList;
    await updateDoc(docRef, {
      friendsList: arrayUnion(...newFriends, id)
    });
    alert('Friend Added')
  }

  return (
    <div className='profile-container'>
      <div className='user-info-container'>
        <div className='user-info'>
          <img src={currentUser.photoURL} alt='User profile' className='user-photo' />
          <div className='user-name'>{currentUser.displayName}</div>
          <div className='user-email'>{currentUser.email}</div>
        </div>
      </div>
      <div className='allUser-info'>
        {filteredList.map(data => (
          <div key={data.id} className='user-card'>
            <img src={data.profilePhoto} alt='User' className='user-card-photo' />
            <div className='user-card-name'>{data.userName}</div>
            <button onClick={() => addFriendHandler(data.id)} className='add-friend-button'>ADD FRIEND</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
