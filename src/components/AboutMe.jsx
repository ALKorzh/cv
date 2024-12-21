import React from 'react';

function AboutMe() {
  return (
    <section className="bg-white p-6 rounded shadow mb-4 flex flex-col gap-4">
      <div className="bg-gray-100 p-4 rounded shadow">
        <div className="flex items-center gap-4">
          <img src="/assets/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full shadow" />
          <div>
            <h2 className="text-xl font-bold mb-2">About Me</h2>
            <p>
              I’m a dedicated Frontend Developer with more than a year of experience in developing
              interactive and user-centric web applications. My expertise lies in crafting clean,
              responsive, and intuitive designs, with a strong emphasis on enhancing user experience
              and performance.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Strengths</h3>
        <ul className="list-disc ml-5">
          <li>Proficient in React, TypeScript, and TailwindCSS for modern UI development.</li>
          <li>Strong understanding of responsive design and cross-browser compatibility.</li>
          <li>Experienced in working with APIs and creating efficient data flows.</li>
          <li>Committed to writing clean, maintainable, and scalable code.</li>
          <li>Passionate about learning new technologies and best practices.</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">Let's Collaborate</h3>
        <p>
          I’m eager to connect and explore new opportunities for collaboration on exciting projects.
          Let’s team up to create remarkable digital experiences together.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
