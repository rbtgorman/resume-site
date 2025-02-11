import React from 'react';

function Header() {
  return (
    <header className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-2">Robert Gorman</h1>
      <p className="text-xl text-center text-blue-600">AWS Cloud PractitionerCertified Web Developer/Data Engineer</p>
    </header>
  );
}

export default Header;
