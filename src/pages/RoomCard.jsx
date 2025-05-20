import React from "react";

const RoomCard = () => {
    const handleRooms = e =>{
        e.preventDefault();
        const form = e.target;
        const fromData = new FormData(form);
        const newRoom = Object.fromEntries(fromData.entries());
        console.log(newRoom);

        // db
        fetch('http://localhost:3000/rooms',{
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
                <h1 className='text-3xl font-bold'>Add Coffe</h1>
            <p className='text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

        <form onSubmit={handleRooms} >
  
  <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Title</label>
  <input type="text" className="input w-full" name='title' placeholder="title" />
  </fieldset>
    
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Location</label>
  <input type="text" className="input w-full" name='location' placeholder="Location" />
  </fieldset>
    
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">Rent</label>
  <input type="text" className="input w-full" name='rent' placeholder="rent" />
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">roomType</label>
  <input type="text" className="input w-full" name='roomType' placeholder="roomType" />
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">lifestylePreferences</label>
  <input type="text" className="input w-full" name='lifestylePreferences' placeholder="lifestylePreferences" />
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">description</label>
  <input type="text" className="input w-full" name='description' placeholder="description" />
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">contactInfo</label>
  <input type="text" className="input w-full" name='contactInfo' placeholder="contactInfo" />
  </fieldset>
  
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">availability</label>
  <input type="text" className="input w-full" name='availability' placeholder="availability" />
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">userEmail</label>
  <input type="text" className="input w-full" name='userEmail' placeholder="userEmail" />
  </fieldset>
   
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">userName</label>
  <input type="text" className="input w-full" name='userName' placeholder="userName" />
  </fieldset>
  
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
  <label className="label">likeCount</label>
  <input type="text" className="input w-full" name='likeCount' placeholder="likeCount" />
  </fieldset>

  
  </div>

  
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border py-4 my-6 px-4">
  <label className="label">Photo</label>
  <input type="text" className="input w-full" name='photoUrl' placeholder="photo Url" />
  </fieldset>

<input className='w-full btn' type="submit" value="Add Coffe" />
</form>
        </div>
    
  );
};

export default RoomCard;
