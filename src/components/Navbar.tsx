import React, { useState } from 'react'; // Import React and useState for state management
import { Link } from 'react-router-dom'; // Import Link for navigation without full page reloads
import { Menu, X, Eye, Brain } from 'lucide-react'; // Import icons from Lucide React

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <nav className="bg-white shadow-lg"> {/* Navigation bar with a white background and shadow */}
      <div className="max-w-7xl mx-auto px-4"> {/* Container to center the navbar */}
        <div className="flex justify-between h-16"> {/* Flexbox to space out navbar items */}
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center"> {/* Logo links to home */}
              <Eye className="h-8 w-8 text-indigo-600" /> {/* Eye icon */}
              <Brain className="h-8 w-8 text-purple-600 -ml-2" /> {/* Brain icon */}
              <span className="ml-2 text-xl font-bold">VisionAI Labs</span> {/* Branding text */}
            </Link>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
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
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu state
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} {/* Show X when open, Menu when closed */}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when isOpen is true) */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1"> {/* Spacing for mobile menu items */}
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsOpen(false)} // Close menu on click
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
