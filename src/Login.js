import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    uname: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

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
        console.log('Login successful');
        // You can perform actions after successful login, such as redirecting to another page
      } else {
        console.error('Login failed');
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error sending login data:', error);
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
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
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
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full mb-2 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
