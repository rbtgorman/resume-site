import React from 'react';

function About() {
  return (
    <section className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b border-blue-300 pb-2">About Me</h2>
      <div className="space-y-6">
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">Robert Gorman</h3>
          <p className="text-gray-700 leading-relaxed">
            I am enrolled in the MS of Business Analytics Program at Rutgers University. I am an AWS-certified Cloud Practitioner, you can view my GitHub profile to see all my personal projects at:  
            <a href="https://github.com/rbtgorman" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300"> github.com/rbtgorman</a>.
          </p>
        </div>
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <h4 className="text-xl font-semibold mb-2 text-blue-700">Interests</h4>
          <p className="text-gray-700 leading-relaxed">
            My interests include analytic-driven programming within sports and finance along with home automation. I am also interested in data management, concurrency, and performance-related work that takes advantage of my broad experience with Python, R, PHP, and SQL along with plenty of other frameworks.
          </p>
        </div>
        <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <h4 className="text-xl font-semibold mb-2 text-blue-700">Current Role</h4>
          <p className="text-gray-700 leading-relaxed">
            In my current role, I assist with administering/maintaining servers using Linux and PowerShell and troubleshooting escalated computer software and hardware issues along with installing and maintaining AV equipment in enhanced classrooms on campus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;