import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../../services/firebase'

const LoginGoogle = () => {

  async function googleLoginHandler(){
    try {
      const user = await signInWithPopup(auth,provider);
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