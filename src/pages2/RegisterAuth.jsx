import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../ptovider/AuthProvider';
import toast from 'react-hot-toast';

const RegisterAuth = () => {
    const {creatUser,setUser,updateUser,googlePopUp} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e =>{
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        // console.log({name,email,photo,password})
        if (!passwordRegex.test(password)) {
         toast.error("Password must be one uppercase one lowercase and leng 6 character")
       }
        creatUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Successfully Registered");
            navigate(location.state?.from || "/");
          })
          .catch((err) => {
            console.log("Update Error:", err);
            setUser(user);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlePopUp = ()=>{
      googlePopUp().then(result => {
      const user = result.user;
      setUser(user);
      toast.success("Login with Google successful!");
      navigate(location.state ? location.state : "/");
    })
    .catch(error => {
  if (error.code === 'auth/popup-closed-by-user') {
    toast.error("Google sign-in was cancelled.");
  } else {
    toast.error("Google sign-in failed.");
    console.error("Google login error:", error);
  }
});

  }
    return (
        <div className='flex justify-center bg-[#F2F8FC] p-5'>
          <title>Roomate || Register</title>
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
          

          <p className='font-bold text-center pt-3'>have an account? pelease <Link to={"/auth/login"} className='text-rose-400'>Login</Link></p>
        </fieldset>
      </form>
      {/* Google */}
<button onClick={handlePopUp} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Continue with Google
</button>

    </div>
         </div>
    );
};

export default RegisterAuth;