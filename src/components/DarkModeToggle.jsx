import React, { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs"; // Import icons for light and dark mode

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded  dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex items-center space-x-2"
    >
      {isDarkMode ? (
        <>
          <BsSun className="w-5 h-5  " />
       
        </>
      ) : (
        <>
          <BsMoon className="w-5 h-5" />
        
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
