import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../ptovider/AuthProvider';
import { Link } from 'react-router';
import toast from 'react-hot-toast';

const MyListing = () => {
    const { user } = use(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/userRooms?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyListings(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      fetch(`http://localhost:3000/userRooms/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(() => {
          toast.success("Deleted successfully");
          setMyListings(myListings.filter(item => item._id !== id));
        });
    }
  };

  if (loading) return <span className="loading loading-bars loading-xl"></span>;
    return (
         <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">My Listings</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myListings.map(item => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.rent}</td>
              <td>
                <Link to={`/update/${item._id}`}>
                  <button className="btn btn-sm btn-warning">Update</button>
                </Link>
                <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-error ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyListing;