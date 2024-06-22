import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, twitterProvider } from '../../../services/firebase';
import UserContext from '../../../context/AuthContext/UserContext';
import { signInWithPopup } from 'firebase/auth';
import XIcon from '@mui/icons-material/X';
import './css/LoginX.css'
import useAddUserDb from '../../../hooks/useAddUserDb'

const LoginX = () => {
    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();
  
    async function xLoginHandler(){
      try {
        const userAuth = await signInWithPopup(auth,twitterProvider);
        setCurrentUser(userAuth.user);
        await useAddUserDb(userAuth)
        navigate('/app');
      } catch (error) {
        alert(error.message)
       console.log(error.message,error); 
      }
    }
  return (
    <div className='x-container'>
        <button onClick={xLoginHandler} className='x-button'>
          <XIcon className='x-icon'/>
        </button>
    </div>
  )
}

export default LoginX