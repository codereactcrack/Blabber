import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, githubProvider } from '../../../services/firebase';
import UserContext from '../../../context/AuthContext/UserContext';
import { signInWithPopup } from 'firebase/auth';
import GitHubIcon from '@mui/icons-material/GitHub';
import './css/LoginGitHub.css'
import useAddUserDb from '../../../hooks/useAddUserDb';

const LoginGitHub = () => {
  const {setCurrentUser} = useContext(UserContext);
  const navigate = useNavigate();

  async function gitHubLoginHandler(){
    try {
      const userAuth = await signInWithPopup(auth,githubProvider);
      setCurrentUser(userAuth.user);
      await useAddUserDb(userAuth);
      navigate('/MainScreen');
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