import React, { use } from 'react';
import { AuthContext } from '../ptovider/AuthProvider';
import toast from 'react-hot-toast';

const AddRoommate = () => {
    const {user} = use(AuthContext)
    const handleFindRoom = e =>{
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const newRoom = Object.fromEntries(fromData.entries());
        console.log(newRoom);

        // db
        fetch('http://localhost:3000/users',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newRoom)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("after post data:",data)
            toast.success("User add post")
        })
        
    }
    return (
        
        <div className=' text-center'>
            <div className='p-12 space-y-4'>
                <h1 className='text-3xl font-bold'>Find Room</h1>
            
            </div>

        <form onSubmit={handleFindRoom} >
  
  <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5'>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Title</label>
  <input type="text" className="input w-full" name='title' placeholder="title" required/>
  </fieldset>
    
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Location</label>
  <input type="text" className="input w-full" name='location' placeholder="Location" required/>
  </fieldset>
    
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Rent</label>
  <input type="text" className="input w-full" name='rent' placeholder="rent" required/>
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">roomType</label>
  <input type="text" className="input w-full" name='roomType' placeholder="roomType" required/>
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">lifestylePreferences</label>
  <input type="text" className="input w-full" name='lifestylePreferences' placeholder="lifestylePreferences" required/>
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">description</label>
  <input type="text" className="input w-full" name='description' placeholder="description" required/>
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">contactInfo</label>
  <input type="text" className="input w-full" name='contactInfo' placeholder="contactInfo" required/>
  </fieldset>
  
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">availability</label>
  <input type="text" className="input w-full" name='availability' placeholder="availability" required/>
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">userEmail</label>
  <input type="text" className="input w-full" defaultValue={user?.email} name='userEmail' readOnly placeholder="userEmail" required/>
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">userName</label>
  <input type="text" className="input w-full" name='userName'  placeholder="userName" readOnly defaultValue={user?.displayName}/>
  </fieldset>
  
    

  
  </div>

  
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border py-4 my-6 px-4">
  <label className="label">Photo</label>
  <input type="text" className="input w-full" name='photoUrl' placeholder="photo Url" />
  </fieldset>

<input className='w-full btn' type="submit" value="Add Post" />
</form>
        </div>
    );
};

export default AddRoommate;