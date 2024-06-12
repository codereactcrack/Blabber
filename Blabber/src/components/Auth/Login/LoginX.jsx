import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, xProvider } from '../../../services/firebase';
import UserContext from '../../../context/AuthContext/UserContext';
import { signInWithPopup } from 'firebase/auth';
import XIcon from '@mui/icons-material/X';

const LoginX = () => {
    const {setCurrentUser} = useContext(UserContext);
    const navigate = useNavigate();
  
    async function xLoginHandler(){
      try {
        const userAuth = await signInWithPopup(auth,xProvider);
        setCurrentUser(userAuth.user);
        navigate('/chat-room');
      } catch (error) {
       console.log(error.message,error); 
      }
    }
  return (
    <div className='x-login-button'>
        <button onClick={xLoginHandler}><XIcon/></button>
    </div>
  )
}

export default LoginX