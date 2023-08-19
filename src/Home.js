import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h1 className="text-2xl font-semibold mb-4">Welcome to My Website</h1>
        <p className="text-gray-600 mb-4">
          This is a Website for Book Resell Portal.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
