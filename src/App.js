import './App.css';
import Navbar from './Navbar';
import React from 'react';
import Home from './Home';
import About from './About';
import Books from './Books';
import Contact from './Contact';
import Signup from './Signup';
import Login from './Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
