// UserList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserCard from './UserCard';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortOption === 'name') {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortOption === 'email') {
      return a.email.localeCompare(b.email);
    } else if (sortOption === 'company') {
      return a.companyName.localeCompare(b.companyName);
    }
    return 0;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="company">Company</option>
      </select>
      <div className="flex flex-wrap">
        {sortedUsers.map(user => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
      <UserForm />
    </div>
  );
};

export default UserList;
