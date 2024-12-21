import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Redux Notion',
      description:
        'Redux Notion is an app built with React and Redux for state management, offering a powerful and scalable solution for handling complex state logic in applications. It demonstrates the use of Redux for state persistence and global state management.',
      date: '23 November - 7 December, 2024',
      technologies: ['React', 'Redux', 'TailwindCSS', 'Axios', 'JSON-Server'],
      githubLink: 'https://github.com/ALKorzh/redux',
      gif: '/assets/redux.gif',
    },
    {
      name: 'Lamoda',
      description:
        'The Lamoda app is developed with React using functional components, emphasizing clean and efficient code. It leverages hooks like useCallback, useMemo, and useEffect to optimize performance and functionality.',
      date: '28 October - 9 November, 2024',
      technologies: ['React', 'CSS'],
      githubLink: 'https://github.com/ALKorzh/lamoda',
      gif: '/assets/lamoda.gif',
    },
    {
      name: 'Api & Spa',
      description:
        'The Api & Spa app is developed with React and TailwindCSS, prioritizing clean and efficient code. It uses Axios for handling API requests and TailwindCSS for styling. The app supports both createBrowserRouter and BrowserRouter methods for defining routes.',
      date: '14 October - 27 October, 2024',
      technologies: ['React', 'TailwindCSS', 'React-router-dom'],
      githubLink: 'https://github.com/ALKorzh/spa-routing-react',
      gif: 'assets/spa-routing.gif',
    },
    {
      name: 'TodoIst',
      description:
        'This TodoList app is developed with React using class components, offering a robust and intuitive interface for effectively managing your tasks.',
      date: '3 October - 13 October, 2024',
      technologies: ['React', 'CSS'],
      githubLink: 'https://github.com/ALKorzh/todoist',
      gif: '/assets/todoist.gif',
    },
  ];

  return (
    <section className="bg-white p-6 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Projects</h2>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li key={project.name} className="bg-gray-100 p-4 rounded shadow">
            <div className="flex flex-col lg:flex-row gap-4">
              <img
                src={project.gif}
                alt={`${project.name} demo`}
                className="w-full lg:w-1/3 rounded shadow"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.date}</p>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Link to GitHub
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
