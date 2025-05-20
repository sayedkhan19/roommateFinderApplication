import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../ptovider/AuthProvider';

const RegisterAuth = () => {
    const {creatUser,setUser} = use(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log({name,email,photo,password})
        creatUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setUser(user);
            
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    // ..
  });
    }
    return (
        <div className='flex justify-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <form onSubmit={handleRegister} className="card-body">
            <h1 className='text-3xl font-semibold'>Register your account</h1>
        <fieldset className="fieldset">
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
         
         
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>

          <p className='font-bold text-center pt-5'>have an account? pelease <Link to={"/auth/login"} className='text-rose-400'>Login</Link></p>
        </fieldset>
      </form>

    </div>
         </div>
    );
};

export default RegisterAuth;