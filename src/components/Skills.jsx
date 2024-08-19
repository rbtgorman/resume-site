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
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <h3 className="text-xl font-semibold bg-gray-100 p-4 border-b border-gray-200">
              {category.category}
            </h3>
            <ul className="p-4 space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
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