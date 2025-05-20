import React from 'react';
import { Link } from 'react-router';

const LoginAuth = () => {
    return (
         <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <div className="card-body">
            <h1 className='text-3xl font-semibold'>Login your account</h1>
        <form className="fieldset">
          
          <label className="label">Email</label>
          <input type="email"name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          
          <input type="password"name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <input type='submit' className="btn btn-neutral mt-4" value="Login" />

          <p className='font-bold text-center pt-5'>Dont have an account? pelease <Link to={"/auth/register"} className='text-rose-400'>Register</Link></p>
        </form>
      </div>

    </div>
         </div>
    );
};

export default LoginAuth;