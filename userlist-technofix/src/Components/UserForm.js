import { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
    },
    companyName: '',
  });

  const handleInputChange = (e) => {
    // Update the form data based on user input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission and add a new user
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for each user detail and update the state on change */}
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
