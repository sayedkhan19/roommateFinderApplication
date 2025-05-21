import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../ptovider/AuthProvider';
import toast from 'react-hot-toast';

const LoginAuth = () => {
const {signIn} = use(AuthContext);
const location = useLocation();
const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then((result) => {
    // Signed in 
    const user = result.user;
    toast.success("Log in success")
    navigate(`${location.state? location.state : "/"}`)
  })
  .catch((error) => {
    toast.error(error.message)
  });
    }
    return (
         <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <form onSubmit={handleLogin} className="card-body">
            <h1 className='text-3xl font-semibold'>Login your account</h1>
        <fieldset className="fieldset">
          
          <label className="label">Email</label>
          <input type="email"name='email' className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          
          <input type="password"name='password' className="input" placeholder="Password" required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button type='submit' className="btn btn-neutral mt-4">Login</button>

          <p className='font-bold text-center pt-5'>Dont have an account? pelease <Link to={"/auth/register"} className='text-rose-400'>Register</Link></p>
        </fieldset>
      </form>

    </div>
         </div>
    );
};

export default LoginAuth;