import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-xl">My Website</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link to="/Books" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Books
                </Link>
                <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/signup"
              className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Signup
            </Link>
            <Link
              to="/login"
              className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md">
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}

      <nav className={`bg-gray-800 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out fixed top-0 left-0 h-screen w-64 z-50`}>
        {/* ... rest of the JSX ... */}
        <div className="-mr-2 flex md:hidden">
          <button onClick={toggleNavbar} className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md">
            {/* ... button content ... */}
          </button>
        </div>
        {/* ... rest of the JSX ... */}
      </nav>
    </nav>
  );
};

export default Navbar;
