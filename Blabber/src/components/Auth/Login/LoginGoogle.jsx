import { signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth, provider } from '../../../services/firebase'
import UserContext from '../../../context/AuthContext/UserContext'
import {useNavigate} from 'react-router-dom'

const LoginGoogle = () => {

  const {setCurrentUser} = useContext(UserContext);
  const navigate = useNavigate();

  async function googleLoginHandler(){
    try {
      const userAuth = await signInWithPopup(auth,provider);
      setCurrentUser(userAuth.user);
      navigate('/chat-room');
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