import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Aliaksei Karzhou</h1>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/ALKorzh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://t.me/LeksKorzh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Telegram
            </a>
            <a href="mailto:alexkorzhwork@gmail.com" className="text-blue-500 hover:underline">
              Email
            </a>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 flex flex-col lg:flex-row gap-4 flex-grow">
        <div className="flex-1">
          <AboutMe />
          <Projects />
        </div>
        <aside className="w-full lg:w-1/4">
          <Education />
          <Skills />
          <Languages />
        </aside>
      </main>
      <footer className="bg-white shadow p-4 mt-4 text-center">
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/ALKorzh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://t.me/LeksKorzh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Telegram
          </a>
          <a href="mailto:alexkorzhwork@gmail.com" className="text-blue-500 hover:underline">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
