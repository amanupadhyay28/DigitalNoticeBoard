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
      managerAvatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      title: 'Backend Developer',
      description: 'Join our backend team to work with Node.js and MongoDB.',
      numberOfOpenings: 3,
      managerEmail: 'manager2@example.com',
      managerAvatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    },
    {
      title: 'Fullstack Developer',
      description: 'Join our full stack team to work with MERN.',
      numberOfOpenings: 7,
      managerEmail: 'manager3@example.com',
      managerAvatar: 'https://randomuser.me/api/portraits/men/47.jpg',
    },
    // Add more opportunities as needed
  ];
  return (
      <div className="flex flex-col items-center space-y-4 p-4">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="w-full max-w-md  shadow-md rounded-lg p-4 border-2 border-transparent hover:border-white transition-all duration-300">
            <div className="flex items-center">
              <img
                src={opportunity.managerAvatar}
                alt="Manager Avatar"
                className="h-24 w-24 rounded-full mr-4"
              />
              <div className="flex-1 custom-font">
                <h2 className="text-xl font-semibold ">{opportunity.title}</h2>
                <p className="text-sm text-gray-700 dark:text-white">
                  Openings: {opportunity.numberOfOpenings}
                </p>
                <button
                  className="dark:text-[#ff5252] hover:underline flex items-center text-blue-800"
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
              <div className="mt-4 text-gray-700 dark:text-white">
                <p>{opportunity.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default OpportunityBoard;
