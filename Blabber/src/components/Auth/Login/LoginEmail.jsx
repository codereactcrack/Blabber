import React from 'react'
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../services/firebase'
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const LoginEmail = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data){
    const {email,password} = data;
    try {
      signInWithEmailAndPassword(auth,email,password);
      navigate('/chat-room')
    } catch (error) {
      console.log(error.message);
    }
    
  }

  return (
    <div className='email-login-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
        <label className='label'>
            Email Address
            <input type='email' {...register("email",{ required: true})}
                      placeholder='Registered Email Address'/>
            {errors.email?.type === 'required' && <p role="alert">Email is required</p>}
        </label>
        <label className='label'>
            Password
              <input type='password' {...register("password",{ required: true})}  
                    placeholder='Password '/> 
              {errors.password?.type === 'required' && <p role="alert">Password is required</p>}
        </label>
        <div className='login-button'>
          <input type="submit" value='Login'/>
          <LoginIcon/>
        </div>
      </form>
    </div>
  )
}

export default LoginEmail