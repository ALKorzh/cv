import React from 'react';

function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TailwindCSS',
    'Git',
    'TypeScript',
    'Redux',
  ];

  return (
    <section className="bg-white p-6 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <ul className="grid grid-cols-1 gap-2">
        {skills.map((skill) => (
          <li key={skill} className="bg-gray-200 p-2 rounded">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
