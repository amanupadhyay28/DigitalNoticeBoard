import React, { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import GoogleSlidesWidget from "./components/GoogleSlideWidget";
import PomodoroTimer from "./components/PomodoroTimer";
import MusicWidget from "./components/MusicWidget";
import AnnouncementsWidget from "./components/AnnouncementsWidget";
import OpportunityBoardWidget from "./components/OpportunityBoardWidget";
import LeaderboardWidget from "./components/LeaderboardWidget";
import GoogleCalendarWidget from "./components/GoogleCalenderWidget";
import SpreadsheetWidget from "./components/SpreadsheetWidget";
import GoogleFormWidget from "./components/GoogleFormWidget";
import Poll from "./components/Poll";
import IssueTracker from "./components/IssueTracker";
import Quotes from "./components/Quotes";
import InfoWidget from "./components/InfoWidget";
import "./index.css";

const App = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  return (
    <div className="app dark:bg-gray-900 dark:text-white min-h-screen p-4">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-4 mr-10">
        <h1 className="text-2xl sm:text-4xl text-gray-900 dark:text-gray-100 font-bold custom-font lg:ml-[150px] ">
          Hello <span className="text-blue-800 ">Developers,</span>
        </h1>
        <div className="flex-1 flex justify-end items-center space-x-4">
          <div className="text-center">
            <div className="text-lg sm:text-2xl text-blue-800 dark:text-white font-bold">
              {formatTime(currentDateTime)}
            </div>
            <div className="text-sm sm:text-md font-bold text-gray-600 dark:text-white">
              {formatDate(currentDateTime)}
            </div>
          </div>
          <DarkModeToggle />
        </div>
      </header>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <div className="flex-1 sm:w-2/5 lg:w-2/5">
          <GoogleSlidesWidget />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-none">
            <AnnouncementsWidget className="w-full" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <PomodoroTimer className="w-full h-32" />
            </div>
            <div className="flex-1">
              <MusicWidget className="w-full h-32" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-11">
        <div className="col-span-1">
          <OpportunityBoardWidget />
        </div>
        <div className="col-span-1">
          <Poll />
        </div>
        <div className="col-span-1">
          <InfoWidget />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-5">
        <div className="col-span-1">
          <SpreadsheetWidget />
        </div>
        <div className="col-span-1">
          <GoogleCalendarWidget />
        </div>
        <div className="col-span-1">
          <GoogleFormWidget />
        </div>
      </div>
      
      <div className="flex justify-center">
        <LeaderboardWidget />
      </div>
      {/* Uncomment if needed */}
      {/* <IssueTracker /> */}
    </div>
  );
};

export default App;
