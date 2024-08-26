import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <p className="text-center text-blue-800 font-semibold">
        &copy; {currentYear} Robert Gorman. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://github.com/rbtgorman" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/robert-gorman-638852149/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;