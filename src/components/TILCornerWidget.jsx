import React from 'react';

function TILItem({ title, summary, domain }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-3">{summary}</p>
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">{domain}</span>
    </div>
  );
}

function TILCornerWidget() {
  const tilItems = [
    {
      title: 'Understanding React Hooks',
      summary: 'React Hooks allow you to use state and other React features without writing a class.',
      domain: 'React',
    },
    {
      title: 'Deep Dive into JavaScript Closures',
      summary: 'Closures are a fundamental concept that every JavaScript developer should understand.',
      domain: 'JavaScript',
    },
    {
      title: 'Exploring the Tailwind CSS Framework',
      summary: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
      domain: 'CSS',
    },
    {
      title: 'Demystifying Redux in State Management',
      summary: 'Redux is a predictable state container for JavaScript apps, often used with React.',
      domain: 'Redux',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4 bg-gray-50 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">TIL (Today I Learned) Corner</h1>
      {tilItems.map((item, index) => (
        <TILItem
          key={index}
          title={item.title}
          summary={item.summary}
          domain={item.domain}
        />
      ))}
    </div>
  );
}

export default TILCornerWidget;
