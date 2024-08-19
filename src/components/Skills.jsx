import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      category: "Web Technologies",
      skills: ["React", "Node.js", "HTML5", "CSS3", "GraphQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Linux"]
    }
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <h3>{category.category}</h3>
          <ul>
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;