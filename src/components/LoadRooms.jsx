import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LoadRooms = () => {
  const [rooms, setRooms] = useState([]);
 const [load ,setLoad] = useState(true);
  useEffect(() => {
    fetch("https://orange-server-delta.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data)
        setLoad(false);
      })
      .catch((error) => console.error("Error fetching rooms:", error));
      setLoad(false);
  }, []);

  if(load){
  return  <span className="loading loading-bars loading-xl"></span>
  }

  return (
    <div className="mt-5 p-4 bg-[#F2F8FC]">
      <h1 className="text-2xl font-bold mb-6">Featured Roommates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div
            key={room._id}
            className="bg-[#FFFFFF] rounded-xl shadow-2xl p-4 h-[300px] w-full flex gap-4 overflow-hidden"
          >
            {/* Image Section */}
            <div className="h-full w-1/2 overflow-hidden rounded-xl transition hover:shadow-xl">
              <img
                src={room.photoUrl}
                alt={room.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="lg:text-xl font-bold">{room.title || "Room Title"}</h2>
                <p className="text-sm mt-1 line-clamp-4">
                  {room.description || "No description available."}
                </p>
                <h1>{room.location}</h1>
                <h1>{room.roomType}</h1>
                <h1>{room.rent}</h1>
              </div>
              <NavLink to={`/detailsroom/${room._id}`} className="btn btn-soft lg:w-full mt-2">View Details</NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadRooms;
