import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '../../../services/firebase';
import UserContext from '../../../context/AuthContext/UserContext';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      navigate('/chat-room');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='register-container'>

      <form onSubmit={handleSubmit(onSubmit)} className='register-form'>

        <label className='label'>First Name:
          <input type='text' placeholder='Enter First Name..'
            {...register("firstName", { required: "First Name is required", 
              maxLength: { value: 20, message: "First Name cannot exceed 20 characters" } })}/>
            {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
        </label>
        <label> Last Name:
          <input type='text' placeholder='Enter Last Name..'
            {...register("lastName", { maxLength: { value: 20, message: "Last Name cannot exceed 20 characters" } })}/>
            {errors.lastName && <p role="alert">{errors.lastName.message}</p>}
        </label>
        <label className='label'> Email Address:
          <input type='email' placeholder='Enter Email Address'
            {...register("email", { required: "Email is required" })}/>
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </label>

        <label className='label'> Password:
          <input type='password' placeholder='Password'
            {...register("password", { required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
                message: "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number"
              } })} />
          {errors.password && <p role="alert">{errors.password.message}</p>}
        </label>

        <label className='label'> Confirm Password:
          <input type='password' placeholder='Confirm Password'
            {...register("confirmpassword", { required: "Confirm Password is required",
              validate: value => value === password || "Passwords do not match"})}/>
          {errors.confirmpassword && <p role="alert">{errors.confirmpassword.message}</p>}
        </label>

        <input type="submit" />
      </form>
      
    </div>
  );
};

export default RegisterPage;
