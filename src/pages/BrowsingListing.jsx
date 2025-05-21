import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BrowsingListing = () => {
    const [roommates, setRoommates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetch("http://localhost:3000/rooms")
        .then(res => res.json())
      .then(data => {
        setRoommates(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
    },[])
    return (
          <div className="overflow-x-auto p-5">
      <h1 className="text-2xl font-semibold mb-4">Browse Roommate Listings</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Room Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {roommates.map((room) => (
            <tr key={room._id}>
              <td>{room.title}</td>
              <td>{room.location}</td>
              <td>{room.rent}</td>
              <td>{room.roomType}</td>
              <td>
                <Link to={`/details/${room._id}`}>
                  <button className="btn btn-sm btn-outline">See More</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default BrowsingListing;