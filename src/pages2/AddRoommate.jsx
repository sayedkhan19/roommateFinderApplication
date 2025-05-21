import React from 'react';

const AddRoommate = () => {
    const handleFindRoom = e=>{

    }
    return (
        <div className='p-24 text-center'>
            <div className='p-12 space-y-4'>
                <h1 className='text-3xl font-bold'>Add Coffe</h1>
            <p className='text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
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

<input className='w-full btn' type="submit" value="Add Coffe" />
</form>
        </div>
    );
};

export default AddRoommate;