import React, {useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';


const UsersGetAll = () => {
  const [getUser, setGetUser] = useState([]);
  

  useEffect(() => {
    fetch('https://orange-server-delta.vercel.app/users')
      .then(res => res.json())
      .then(data => setGetUser(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
// console.log(getUser)
const handleDelete = (id) =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://orange-server-delta.vercel.app/users/${id}`,{
        method:"DELETE"
    })
    .then(res=> res.json())
    .then(data=>{
        console.log("after delete", data)
        if(data.deletedCount){
            const remainingUser = getUser.filter(users=> users._id!== id);
            setGetUser(remainingUser)
            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
    })

    
  }
});

}
  

  return (
    <div className="w-full px-2 md:px-6 lg:px-12 py-6">
      <title>Roomate || All</title>
      <title>Roommate || Update</title>
      <div className="overflow-x-auto">
        <table className="table w-full min-w-[800px]">
          {/* Table Head */}
          <thead className="bg-base-200">
            <tr>
              <th>Photo</th>
              <th>Location & Email</th>
              <th>Title</th>
              <th>Room Type & Rent</th>
              <th>Update & Delete</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {getUser.map(user => (
              <tr key={user._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.photoUrl} alt="Avatar" />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{user.location}</div>
                    <div className="text-sm opacity-50">{user.userEmail}</div>
                  </div>
                </td>
                <td>{user.title}</td>
                <td>
                    <div>{user.roomType}</div>
                    <div>{user.rent} Tk</div>
                </td>
                <td>
                  
                  <NavLink to={`/updateuser/${user._id}`}  className="btn btn-ghost btn-xs">Update</NavLink>
                  <button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
        {getUser.length === 0 && (
          <p className="text-center mt-4 text-gray-500">No user data found.</p>
        )}
      </div>
    </div>
  );
};

export default UsersGetAll;
