import React, { useState } from 'react';
import { FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const OpportunityBoard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const opportunities = [
    {
      title: 'Frontend Developer',
      description: 'We are looking for a skilled frontend developer with experience in React and Tailwind CSS.',
      numberOfOpenings: 2,
      managerEmail: 'manager1@example.com',
      managerAvatar: 'https://www.vecteezy.com/vector-art/2002403-man-with-beard-avatar-character-isolated-icon',
    },
    {
      title: 'Backend Developer',
      description: 'Join our backend team to work with Node.js and MongoDB.',
      numberOfOpenings: 3,
      managerEmail: 'manager2@example.com',
      managerAvatar: 'https://via.placeholder.com/150',
    },
    {
      title: 'Fullstack Developer',
      description: 'Join our full stack team to work with MERN.',
      numberOfOpenings: 7,
      managerEmail: 'manager3@example.com',
      managerAvatar: 'https://via.placeholder.com/150',
    },
    // Add more opportunities as needed
  ];
  return (
      <div className="flex flex-col items-center space-y-4 p-4">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="w-full max-w-md  shadow-md rounded-lg p-4">
            <div className="flex items-center">
              <img
                src={opportunity.managerAvatar}
                alt="Manager Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{opportunity.title}</h2>
                <p className="text-sm text-gray-500">
                  Openings: {opportunity.numberOfOpenings}
                </p>
                <button
                  className="text-blue-500 hover:underline flex items-center"
                  onClick={() => window.location.href = `mailto:${opportunity.managerEmail}`}
                >
                  <FiMail className="mr-1" /> {opportunity.managerEmail}
                </button>
              </div>
              <button onClick={() => handleExpand(index)}>
                {expandedIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {expandedIndex === index && (
              <div className="mt-4 text-gray-700">
                <p>{opportunity.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default OpportunityBoard;
