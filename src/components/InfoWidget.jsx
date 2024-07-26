import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faBell } from '@fortawesome/free-solid-svg-icons';

const announcements =[
    {
    description: 'Holiday for 25th july',
    },
    {
        description: 'CEO meet on 1 Aug',
    },
    {
        description: 'CFO meet on 1 Aug',
    },
    {
        description: 'CEO meet on 1 Aug',
    },
    {
        description: 'CEO meet on 1 Aug',
    },
]
const InfoWidget = () => {
  return (
    <div className="rounded-lg shadow-lg p-5 text-left mr-5 dark:text-white">
      <h2 className="text-gray-800 mb-4 flex items-center text-2xl font-bold dark:text-white">
        <FontAwesomeIcon icon={faBullhorn} className="mr-2 text-orange-600" />
        Announcements
      </h2>
      <ul className="list-none p-0">
        {announcements.map((announcement, index) => (
          <li
            key={index}
            className="bg-gray-100 dark:bg-[#ff5252] p-4 mb-3 rounded-md flex items-center text-lg hover:bg-gray-200 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faBell} className="mr-3 text-teal-600" />
            
            {announcement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoWidget;
