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
      company: "Rutgers University - Camden",
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
    }  ];

    return (
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Work Experience</h2>
        {experiences.map((job, index) => (
          <div key={index} className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h3>
              <h4 className="text-xl text-gray-600 mb-2">{job.company}</h4>
              <p className="text-sm text-gray-500 mb-4">{job.period}</p>
              <ul className="list-disc pl-5 space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-700">{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    );
  }

export default Experience;