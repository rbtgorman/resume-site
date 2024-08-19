import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform using React, Node.js, and MongoDB.",
      link: "https://github.com/yourusername/ecommerce-platform"
    },
    {
      title: "Machine Learning Image Classifier",
      description: "Built an image classification model using TensorFlow and deployed it as a web service.",
      link: "https://github.com/yourusername/image-classifier"
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;