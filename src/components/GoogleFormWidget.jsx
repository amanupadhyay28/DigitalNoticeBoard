import React from 'react';

const GoogleFormWidget = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl text-gray-800 mb-4  mb-4 text-gray-800 dark:text-gray-100 font-bold custom-font ml-[100px]">Submit Your Form</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfrGAwhiaLI2aMZ7Ew0eySeRaXeIWXE8ddr14GA_ybnzHCKnw/viewform?embedded=true"
        width="100%"
        height="550"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="border-none"
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleFormWidget;
