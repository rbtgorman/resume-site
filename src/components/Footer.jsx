import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <p className="text-center">&copy; {currentYear} Robert Gorman. All rights reserved.</p>
    </footer>
  );
}

export default Footer;