import React from "react";

const RoomCard = () => {
    const handleRooms = e =>{
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const newRoom = Object.fromEntries(fromData.entries());
        // console.log(newRoom);

        // db
        fetch('https://orange-server-delta.vercel.app/rooms',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newRoom)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("after post data:",data)
        })
    
    }
  return (
    <div className='p-24 text-center'>
            <div className='p-12 space-y-4'>
                <h1 className='text-3xl font-bold'>Add Roommate</h1>
            
            </div>

        <form onSubmit={handleRooms} >
  
  <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
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
  <input type="text" className="input w-full" name='userEmail' placeholder="userEmail" required/>
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">userName</label>
  <input type="text" className="input w-full" name='userName' placeholder="userName" required/>
  </fieldset>
  
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">likeCount</label>
  <input type="text" className="input w-full" name='likeCount' placeholder="likeCount" required/>
  </fieldset>

  
  </div>

  
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border py-4 my-6 px-4">
  <label className="label">Photo</label>
  <input type="text" className="input w-full" name='photoUrl' placeholder="photo Url" />
  </fieldset>

<input className='w-full btn' type="submit" value="Add" />
</form>
        </div>
    
  );
};

export default RoomCard;
