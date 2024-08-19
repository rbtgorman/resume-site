import React from 'react';
import './Experience.css'; // Assuming you'll create a separate CSS file for styling

function Experience() {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Solutions Inc.",
      period: "January 2020 - Present",
      responsibilities: [
        "Lead a team of 5 developers in creating web applications for clients",
        "Implemented CI/CD pipelines, improving deployment efficiency by 40%",
        "Mentored junior developers, conducting code reviews and pair programming sessions"
      ]
    },
    {
      title: "Web Developer",
      company: "Digital Creations Co.",
      period: "June 2017 - December 2019",
      responsibilities: [
        "Developed and maintained client websites using React and Node.js",
        "Collaborated with design team to implement responsive, mobile-first designs",
        "Optimized website performance, improving load times by an average of 25%"
      ]
    }
    // Add more experiences as needed
  ];

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      {experiences.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.title}</h3>
          <h4>{job.company}</h4>
          <p className="job-period">{job.period}</p>
          <ul>
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;