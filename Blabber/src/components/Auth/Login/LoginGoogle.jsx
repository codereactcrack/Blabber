import { signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth, provider } from '../../../services/firebase'
import UserContext from '../../../context/AuthContext/UserContext'
import {useNavigate} from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import './css/LoginGoogle.css'

const LoginGoogle = () => {

  const {setCurrentUser} = useContext(UserContext);
  const navigate = useNavigate();

  async function googleLoginHandler(){
    try {
      const userAuth = await signInWithPopup(auth,provider);
      setCurrentUser(userAuth.user);
      navigate('/MainScreen');
    } catch (error) {
      alert(error.message)
     console.log(error.message); 
    }
  }

  return (
    <div className='google-login-container'>
      <button onClick={googleLoginHandler} className='google-login-button'><GoogleIcon className='google-icon'/></button>
    </div>
  )
}

export default LoginGoogle