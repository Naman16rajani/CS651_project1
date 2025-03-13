import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    // Wrapping the entire app inside the Router to enable navigation
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar component appears on all pages */}
        <Navbar />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/about" element={<About />} /> {/* About Page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
