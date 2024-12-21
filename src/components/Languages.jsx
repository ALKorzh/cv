import React from 'react';

function Languages() {
  const languages = [
    { name: 'English', level: 'B2' },
    { name: 'Russian', level: 'Native' },
  ];

  return (
    <section className="bg-white p-6 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Languages</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang.name} className="bg-gray-200 p-2 rounded mb-2">
            <strong>{lang.name}:</strong> {lang.level}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
