import React from 'react';

function Contact() {
  return (
    <section className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h2 className="text-3xl font-bold mb-8 text-blue-800 border-b border-blue-300 pb-2 text-center">Contact Me</h2>
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Contact Information</h3>
          <p className="text-gray-700 mb-1">Email: rbtgorman@gmail.com</p>
          <p className="text-gray-700 mb-1">Phone: (856) 993-6601</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/robert-gorman-638852149/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/rbtgorman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;