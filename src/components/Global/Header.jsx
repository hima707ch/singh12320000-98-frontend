import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" id="Header_3" />
            <span className="text-2xl font-bold hover:text-blue-200 transition-colors" id="Header_4">DreamHome</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="Header_5">
            <Link to="/" className="hover:text-blue-200 transition-colors font-medium" id="Header_6">Home</Link>
            <Link to="/properties" className="hover:text-blue-200 transition-colors font-medium" id="Header_7">Properties</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors font-medium" id="Header_8">Contact</Link>
            <Link to="/auth" className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors" id="Header_9">Login/Register</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            id="Header_10"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4" id="Header_11">
            <Link to="/" className="block hover:text-blue-200 transition-colors font-medium" id="Header_12">Home</Link>
            <Link to="/properties" className="block hover:text-blue-200 transition-colors font-medium" id="Header_13">Properties</Link>
            <Link to="/contact" className="block hover:text-blue-200 transition-colors font-medium" id="Header_14">Contact</Link>
            <Link to="/auth" className="block bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors text-center" id="Header_15">Login/Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;