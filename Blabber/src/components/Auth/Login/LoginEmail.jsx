import React from 'react';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../services/firebase';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import './css/LoginEmail.css';

const LoginEmail = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/chat-room');
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='email-login-container'>
      <form onSubmit={handleSubmit(onSubmit)} className='login-form'>
        <label className='label'>
          Email Address
          <input type='email' {...register("email", { required: true })}
                 placeholder='Registered Email Address' className='input-field' />
          {errors.email?.type === 'required' && <p role="alert" className='error-message'>Email is required</p>}
        </label>
        <label className='label'>
          Password
          <input type='password' {...register("password", { required: true })}
                 placeholder='Password' className='input-field' />
          {errors.password?.type === 'required' && <p role="alert" className='error-message'>Password is required</p>}
        </label>
        <button type="submit" className='login-button'>
            LOGIN
            <LoginIcon className='login-icon' />
        </button>
      </form>
    </div>
  );
}

export default LoginEmail;
