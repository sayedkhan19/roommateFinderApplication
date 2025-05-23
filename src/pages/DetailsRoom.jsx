import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const DetailsRoom = () => {
    const roomdeatils = useLoaderData();
    const {_id,title,location,rent,roomType,lifestylePreferences,description,contactInfo,availability,userEmail,userName,likeCount,photoUrl} = roomdeatils || {};
    console.log(roomdeatils)
   const [likesCount, setLikesCount] = useState(0);
  const [showContact, setShowContact] = useState(false);

  const handleLike = () => {
    setLikesCount(prev => prev + 1);    
    setShowContact(true);               
  };
    return (
       <div className="card bg-base-100  shadow-sm bg-[#F2F8FC]">
        <p className="text-2xl font-semibold ml-10 ">
        {likesCount} people interested in
      </p>
  <figure className="px-10 pt-2">
    <img
      src={photoUrl}
      alt="Shoes"
      className="rounded-xl h-[200px] w-[406px]" />
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
    
    <h1>availability: {availability}</h1>
   </div>
    <div className='flex flex-col md:flex-row gap-5 font-semibold'>
        <h1>Email : {userEmail}</h1>
        <h1> Name: {userName}</h1>
    </div>
    <h1>Description: {description}</h1>
     
     
   
   
    <div className="card-actions">
      <button onClick={handleLike} className="btn btn-primary">Like</button>

    </div>
    {showContact && (
  <div className="text-md font-medium text-gray-800">
    📞 Contact Number: {contactInfo}
  </div>
)}
  </div>
</div>
    );
};

export default DetailsRoom;