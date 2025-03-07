import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="max-w-4xl mx-auto mt-8 p-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-pink-500"></div>
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="text-white font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-110">About</Link></li>
        <li><Link to="/projects" className="text-white font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-110">Projects</Link></li>
        <li><Link to="/skills" className="text-white font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-110">Skills</Link></li>
        <li><Link to="/education" className="text-white font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-110">Education</Link></li>
        <li><Link to="/experience" className="text-white font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-110">Work Experience</Link></li>
        <li><Link to="/contact" className="text-white font-semibold hover:text-yellow-300 transition duration-300 transform hover:scale-110">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;