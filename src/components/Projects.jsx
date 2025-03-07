import React, { useState } from 'react';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const projects = [

    {
      title: "Web Application for General Contracting Business",
      description: 
      "Developed a web app for a client's general contracting business. The website is a starter kit designed for creating a blog using Eleventy and Netlify CMS, providing a user-friendly interface for clients to manage content. It includes pre-configured scripts and settings, allowing users to quickly set up a responsive blog site on Netlify by enabling features like Identity and Git Gateway for seamless content submission to the repository. The kit leverages Eleventy's templating capabilities, including reusable components, centralized data management, and image optimization plugins, ensuring efficient development. Users can easily modify the project structure, add new pages, and optimize images while benefiting from built-in features like dark mode and navigation management. Overall, this kit streamlines the process of building and maintaining a blog with minimal setup time.",
       link: "https://enzgroupnj.com/"      
    },

    {
      title: "Water America Web App",
      description: 
      "Developed a web app for consumers to change utility service to a new location using Flask, SQL, Python, and HTML. Enable users to create and login to their profile, pre-arrange a change in location of their service on a specified date, and update/cancel said change. Collaborated with four team members to create data flow and use case diagrams based on requirements provided by the client, determined features to develop during each sprint, test the quality of the code against the predetermined test cases, and present a demo of the app to the client for feedback on areas of improvement for the following sprint. Created a move date validator to verify the user input as a valid future date and utilized USPS Address Validation API to verify the user entered a valid address. Performed QA testing to identify and patch bugs, communicated with my team daily about project status and tracked project progress using collaboration tool, Basecamp.",

      link: "https://github.com/rbtgorman/WaterAmerica"      
    },

    {
      title: "Big Data Analytics Course - Final Project",
      description: 
      "Used python code to complete my final project for this course in my MS Business Analytics Program. "
      + "Used a supermarket dataset which provides information about transactions that took place in a specific supermarket and analyzed the data.",

      link: "https://github.com/rbtgorman/BigDataAnalyticsCourse_FinalProject"
    },
    {
      title: "Machine Learning Course - Final Project",
      description: 
      "This project focused on predicting customer churn using machine learning. The team found that decision trees outperformed logistic regression in accuracy (70.17% vs. 63.73%). They identified segment 6 as the most effective for predicting churn due to its high churn rate and entropy. "
      + "The project also analyzed factors influencing coupon usage, revealing that owning a Simmons loyalty card significantly increased the likelihood of coupon redemption. Overall, the project applies data science techniques to enhance customer retention strategies and optimize marketing efforts.",
      link: "https://github.com/rbtgorman/MachineLearning-Application_Course"
    },
    {
      title: "Resume Web App - This site",
      description: 
      "Developed a web app where users can view my Resume, detailed with different components. "
      + "The site includes; About , Contact , Education, Experience, Projects/Certifications, and Skills pages.",
      link: "https://github.com/rbtgorman/portfolio-mgmt-site"
    },
    {
      title: "Sports Quiz",
      description: 
      "Developed a web app that allows users to test their sports knowledge. Created using PHP/PDO and MySQL. It starts with a prompt to enter an email, then once that is done you start the quiz. Upon completion of the quiz, it provides your results, there is also an Admin Panel option.",

      link: "https://github.com/rbtgorman/sports_quiz_rdg83"
    }
   
  ];

  return (
    <section className="max-w-6xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h2 className="text-3xl font-bold mb-8 text-blue-800 border-b border-blue-300 pb-2 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl hover:border-blue-300 border-2 border-transparent"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{project.title}</h3>
              <p className={`text-gray-700 mb-4 ${hoveredIndex === index ? '' : 'line-clamp-6'} relative`}>
                {project.description}
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition duration-300 ease-in-out"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;