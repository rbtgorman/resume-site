import React from 'react';
import './Education.css';

function Education() {
  const educationList = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      year: "2018 - 2020",
      details: "Specialized in Machine Learning and Data Science. Thesis on 'Improving Neural Network Efficiency in Natural Language Processing'."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      year: "2014 - 2018",
      details: "Graduated with honors. Participated in multiple hackathons and coding competitions."
    }
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <h4>{edu.institution}</h4>
          <p>{edu.year}</p>
          <p>{edu.details}</p>
        </div>
      ))}
    </section>
  );
}

export default Education;