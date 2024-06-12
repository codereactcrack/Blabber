import React from 'react'
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../../services/firebase'

const LoginEmail = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data){
    const {email,password} = data;
    try {
      const emailAuth = await signInWithEmailAndPassword(auth,email,password);
      console.log(emailAuth);
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
        <input type="submit" />
      </form>
    </div>
  )
}

export default LoginEmail