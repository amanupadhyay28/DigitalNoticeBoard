import React from 'react';

const AnnouncementsWidget = () => {
  return (
    <div className="widget announcements p-4">
      <marquee behavior="scroll" direction="left" className="text-xl font-md custom-font text-blue-900 dark:text-white">
        Urgent Hiring To be done for Machine Learning Team .
      </marquee>
    </div>
  );
};

export default AnnouncementsWidget;
