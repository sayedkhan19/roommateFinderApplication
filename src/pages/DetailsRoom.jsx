import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsRoom = () => {
    const roomdeatils = useLoaderData();
    const {_id,title,location,rent,roomType,lifestylePreferences,description,contactInfo,availability,userEmail,userName,likeCount,photoUrl} = roomdeatils || {};
    console.log(roomdeatils)
   
    return (
       <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={photoUrl}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <div>
        <div className='flex flex-col md:flex-row gap-5 font-semibold'>
            <h1>Lcation: {location}</h1>
            <h1>Rent: {rent}</h1>
            <h1>Room Type: {roomType}</h1>
        </div>
    </div>
   <div className='flex flex-col md:flex-row gap-5 font-semibold'>
     <h1>LifestylePreferences: {lifestylePreferences}</h1>
    <h1>Contat: {contactInfo}</h1>
    <h1>availability: {availability}</h1>
   </div>
    <div className='flex flex-col md:flex-row gap-5 font-semibold'>
        <h1>Email : {userEmail}</h1>
        <h1> Name: {userName}</h1>
    </div>
    <h1>Description: {description}</h1>
    <h1>{likeCount}</h1>
   
   
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default DetailsRoom;