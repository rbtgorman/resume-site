import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Contact Me</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-600 mb-1">Email: rbtgorman@gmail.com</p>
              <p className="text-gray-600 mb-1">Phone: (856) 993-6601</p>
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
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;