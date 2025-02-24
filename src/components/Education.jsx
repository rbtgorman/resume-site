import React from 'react';

function Education() {
  const educationList = [
    {
      degree: "Master of Science in Business Analytics",
      institution: "Rutgers University - Camden",
      year: "September 2023 - Present",
      details: "The Rutgers-Camden University M.S. Business Analytics curriculum has helped me learn to apply modern data science and machine learning capabilities at work to solve real-world business problems."
    },
    {
      degree: "B.S. in Computer Science / Business Management (Concentration in Economics)",
      institution: "Rutgers University - Camden",
      year: "2016 - 2021",
      details: 
      "Graduated with a degree in Computer Science and Business Management with a concentration in Economics. " +
      "Heavily involved with groups and organizations on campus such as ACM (Association of Computing and Machinery) and LASO (Latin American Student Organization).",
    }
  ];

  return (
    <section className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h2 className="text-3xl font-bold mb-8 text-blue-800 border-b border-blue-300 pb-2 text-center">Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} className="mb-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">{edu.degree}</h3>
          <h4 className="text-xl text-blue-600 mb-2">{edu.institution}</h4>
          <p className="text-sm text-gray-600 mb-4">{edu.year}</p>
          <p className="text-gray-700">{edu.details}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;