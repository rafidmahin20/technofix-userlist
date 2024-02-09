// UserDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  // Fetch user details based on id or use the context if you're using a state management library
  const user = {}; // Replace with your logic to fetch user details

  return (
    <div>
      <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>{user.email}</p>
      <p>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</p>
      <p>{user.companyName}</p>
    </div>
  );
};

export default UserDetails;
