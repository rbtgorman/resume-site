import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "R & R-Studio for Finance Related Programming", "PHP", "CSS-Tailwind"]
    },
    {
      category: "Web Technologies",
      skills: ["React", "Node.js", "HTML", "MS Access", "MS Excel"]
    },
    {
      category: "Tools & Platforms / Databases",
      skills: ["Git", "Docker", "AWS", "Linux", "MySQL", "Drupal"]
    }
  ];

  return (
    <section className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-br from-green-100 to-blue-100 shadow-2xl rounded-lg overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-pink-400"></div>
      <h2 className="text-3xl font-bold mb-8 text-blue-800 border-b border-blue-300 pb-2 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105">
            <h3 className="text-xl font-semibold bg-blue-600 text-white p-4 border-b border-blue-400">
              {category.category}
            </h3>
            <ul className="p-4 space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;