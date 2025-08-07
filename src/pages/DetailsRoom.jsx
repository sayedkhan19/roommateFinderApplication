import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../ptovider/AuthProvider';
import toast from 'react-hot-toast';

const DetailsRoom = () => {
  const { user } = use(AuthContext);
  const roomDetails = useLoaderData();

  const {
    _id, title, location, rent, roomType,
    lifestylePreferences, description, contactInfo,
    availability, userEmail, userName, likeCount = 0, photoUrl
  } = roomDetails || {};

  const [likesCount, setLikesCount] = useState(likeCount);
  const [showContact, setShowContact] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = async () => {
  if (user?.email === userEmail) {
    toast.error("You can't like your own post.");
    return;
  }

  if (hasLiked) return;

  try {
    const res = await fetch(`http://localhost:3000/rooms/${_id}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    if (data.modifiedCount > 0 || data.success) {
      setLikesCount(prev => prev + 1);
      setShowContact(true);
      setHasLiked(true);
      toast.success('Thanks for your interest!');
    } else {
      toast.error(data.message || 'Failed to like the room.');
    }
  } catch (error) {
    toast.error('Server error. Please try again.');
    console.error('Like error:', error);
  }
};

  return (
    <div className="card bg-base-100 shadow-sm bg-[#F2F8FC]">
      <title>Roommate || Details</title>
      <p className="text-2xl font-semibold ml-10">
        {likesCount} people interested in
      </p>

      <figure className="px-10 pt-2">
        <img
          src={photoUrl}
          alt="Room"
          className="rounded-xl h-[200px] w-[406px]"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>

        <div className='flex flex-col md:flex-row gap-5 font-semibold'>
          <h1>Location: {location}</h1>
          <h1>Rent: {rent}</h1>
          <h1>Room Type: {roomType}</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-5 font-semibold'>
          <h1>Lifestyle Preferences: {lifestylePreferences}</h1>
          <h1>Availability: {availability}</h1>
        </div>

        <div className='flex flex-col md:flex-row gap-5 font-semibold'>
          <h1>Email: {userEmail}</h1>
          <h1>Name: {userName}</h1>
        </div>

        <h1>Description: {description}</h1>

        <div className="card-actions">
          <button
            onClick={handleLike}
            className="btn btn-active btn-info"
            disabled={user?.email === userEmail || hasLiked}
          >
            Like
          </button>
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