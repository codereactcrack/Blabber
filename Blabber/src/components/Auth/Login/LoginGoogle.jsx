import { signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth, provider } from '../../../services/firebase'
import UserContext from '../../../context/AuthContext/UserContext'
import {useNavigate} from 'react-router-dom'

const LoginGoogle = () => {

  const {setCurrentUser} = useContext(UserContext);
  const naviagte = useNavigate();

  async function googleLoginHandler(){
    try {
      const user = await signInWithPopup(auth,provider);
      setCurrentUser(user);
      naviagte('/chat-room')
      console.log(user);
    } catch (error) {
     console.log(error.message); 
    }
  }

  return (
    <div className='google-login-button'>
      <button onClick={googleLoginHandler}>SIGN IN WITH GOOGLE</button>
    </div>
  )
}

export default LoginGoogle