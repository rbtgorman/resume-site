import React from 'react';

function Experience() {
  const experiences = [
    {
      title: "Desktop Support Engineer",
      company: "Rutgers University - Camden IT",
      period: "June 2020 - Present",
      responsibilities: [
        "Help design and build Enhanced Classrooms & provide IT support for the rooms.",
        "Assisted in campus-wide 70+ classroom upgrade – Installed, and configured WUXGA projectors, projector screens, Extron control systems, and HD lecture capture IP cameras.",
        "Wired and wireless support for ResNet devices – port repair, configuration, 802.1x troubleshooting/device registration. ",
        "Monitor and maintain University Computer Systems/Networks.",
        "Monitor ServiceNow classroom queue; resolve ticket."
      ]
    },
    {
      title: "IT Desktop Support Intern",
      company: "Research for Action",
      period: "September 2019 - January 2020",
      responsibilities: [
        "Troubleshoot hardware and software issues, configuration of software packages",
        "Setup and configuration of new computers or rebuilding older computers",
        "Support of conference room AV technology, assisted with network and server maintenance, monitoring, and development"
      ]
    },
    {
      title: "IT Help Desk Consultant",
      company: "Rutgers University - Camden",
      period: "August 2016 - June 2020",
      responsibilities: [
        "Troubleshoot hardware and software issues, configuration of software packages",
        "Setup and configuration of new computers or rebuilding older computers",
        "Support of conference room AV technology, assisted with network and server maintenance, monitoring, and development"
      ]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h2 className="text-3xl font-bold mb-8 text-blue-800 border-b border-blue-300 pb-2 text-center">Work Experience</h2>
      {experiences.map((job, index) => (
        <div key={index} className="mb-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">{job.title}</h3>
          <h4 className="text-xl text-blue-600 mb-2">{job.company}</h4>
          <p className="text-sm text-gray-600 mb-4">{job.period}</p>
          <ul className="list-disc pl-5 space-y-2">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-gray-700">{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;