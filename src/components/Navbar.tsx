import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Eye, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Eye className="h-8 w-8 text-indigo-600" />
              <Brain className="h-8 w-8 text-purple-600 -ml-2" />
              <span className="ml-2 text-xl font-bold">VisionAI Labs</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Contact</Link>
            <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;