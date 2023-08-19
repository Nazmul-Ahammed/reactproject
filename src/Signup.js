import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    uname: '',
    gender: '',
    DOB: '',
    email: '',
    phone: '',
    user_type: '',
    shop_name: '',
    password: '',
    confirm_password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost:44379/api/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Registration successful');
        // Redirect to the login page after successful registration
        navigate('/about');
      } else {
        console.error('Registration failed');
        // Handle registration failure, show error message, etc.
      }
    } catch (error) {
      console.error('Error sending registration data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="uname"
            value={formData.uname}
            onChange={handleChange}
            placeholder="Username"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="user_type"
            value={formData.user_type}
            onChange={handleChange}
            placeholder="User Type"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="text"
            name="shop_name"
            value={formData.shop_name}
            onChange={handleChange}
            placeholder="Shop Name"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <input
            type="password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
             Signup
            
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
