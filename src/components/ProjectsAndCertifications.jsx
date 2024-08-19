import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Portfolio Management Website",
      description: 
      "Developed a website that allows users to add, delete, and modify projects they have worked on."
      + "This was created using React and Javascript mainly",
      link: "https://github.com/rbtgorman/portfolio-mgmt-site"
    },
    {
      title: "Water America Web App",
      description: 
      "Develop a web app for consumers to change utility service to a new location using Flask, SQL, Python, and HTML"
      +"Enable users to create and login to their profile, pre-arrange a change in location of their service on a specified date, and update/cancel said change."+
      +"Collaborated with four team members to create data flow and use case diagrams based on requirements provided by the client, determined features to develop during each sprint, test the quality of the code against the predetermined test cases, and present a demo of the app to the client for feedback on areas of improvement for the following sprint."
      +"Created a move date validator to verify the user input as a valid future date and utilized USPS Address Validation API to verify the user entered a valid address."
      +"Performed QA testing to identify and patch bugs,Communicated with my team daily about project status and tracked project progress using collaboration tool, Basecamp.",

      link: "https://github.com/rbtgorman/"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Projects And Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
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