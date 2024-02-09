import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="m-4 p-4 border">
      <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="mb-2" />
      <h2>{`${user.firstName} ${user.lastName}`}</h2>
      <p>{user.email}</p>
      <p>{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</p>
      <p>{user.companyName}</p>
    </div>
  );
};

export default UserCard;
