import React, { useState, useEffect } from 'react';
import '../index.css';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

function About() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.setAttribute('data-theme', savedTheme);
    }
  }, []);

  return (
    <section 
      className="max-w-4xl mx-auto mt-16 p-8 shadow-2xl rounded-lg overflow-hidden relative"
      style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}
    >
      <button 
        onClick={toggleTheme} 
        className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
         {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h2 className="text-3xl font-bold mb-6 border-b border-blue-300 pb-2">About Me</h2>
      <div className="space-y-6">
        <div 
          className="bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
          style={{ backgroundColor: 'var(--card-bg-color)' }}
        >
          <h3 className="text-2xl font-semibold mb-2">Robert Gorman</h3>
          <p className="leading-relaxed">
            I am enrolled in the MS of Business Analytics Program at Rutgers University. I am an AWS-certified Cloud Practitioner, you can view my GitHub profile to see all my personal projects at:  
            <a href="https://github.com/rbtgorman" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300"> github.com/rbtgorman</a>.
          </p>
        </div>
        <div 
          className="bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
          style={{ backgroundColor: 'var(--card-bg-color)' }}
        >
          <h4 className="text-xl font-semibold mb-2">Interests</h4>
          <p className="leading-relaxed">
            My interests include analytic-driven programming within sports and finance along with home automation. I am also interested in data management, concurrency, and performance-related work that takes advantage of my broad experience with Python, R, PHP, and SQL along with plenty of other frameworks.
          </p>
        </div>
        <div 
          className="bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
          style={{ backgroundColor: 'var(--card-bg-color)' }}
        >
          <h4 className="text-xl font-semibold mb-2">Current Role</h4>
          <p className="leading-relaxed">
            In my current role, I assist with administering/maintaining servers using Linux and PowerShell and troubleshooting escalated computer software and hardware issues along with installing and maintaining AV equipment in enhanced classrooms on campus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;