import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, gitProvider } from '../../../services/firebase';
import UserContext from '../../../context/AuthContext/UserContext';
import { signInWithPopup } from 'firebase/auth';
import GitHubIcon from '@mui/icons-material/GitHub';
import './css/LoginGitHub.css'

const LoginGitHub = () => {
  const {setCurrentUser} = useContext(UserContext);
  const navigate = useNavigate();

  async function gitHubLoginHandler(){
    try {
      const userAuth = await signInWithPopup(auth,gitProvider);
      setCurrentUser(userAuth.user);
      navigate('/chat-room');
    } catch (error) {
      alert(error.message)
     console.log(error.message); 
    }
  }
    return (
        <div className='github-container'>
            <button onClick={gitHubLoginHandler} className='github-button'>
              <GitHubIcon className='github-icon'/>
            </button>
        </div>
    )
}

export default LoginGitHub