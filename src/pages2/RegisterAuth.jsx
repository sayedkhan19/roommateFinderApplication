import React from 'react';
import { Link } from 'react-router';

const RegisterAuth = () => {
    return (
        <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <div className="card-body">
            <h1 className='text-3xl font-semibold'>Register your account</h1>
        <form className="fieldset">
         {/* name */}
          <label className="label">Email</label>
          <input type="text" name='name' className="input" placeholder="Name" required/>
         
         {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>

          {/* photo */}
          <label className="label">Photo</label>
          <input type="text" className="input" name='photo' placeholder="Photo-url" required/>
         
         {/* password */}
          <label className="label">Password</label>
          <input type="password"name='password' className="input" placeholder="Password" required/>
         
         
          
          <button className="btn btn-neutral mt-4">Login</button>

          <p className='font-bold text-center pt-5'>have an account? pelease <Link to={"/auth/login"} className='text-rose-400'>Login</Link></p>
        </form>
      </div>

    </div>
         </div>
    );
};

export default RegisterAuth;