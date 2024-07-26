  import React,{useState,useEffect} from "react";
  import DarkModeToggle from "./components/DarkModeToggle";
  import WidgetBoard from "./components/Drag&Drop";
  import GoogleSlidesWidget from "./components/GoogleSlideWidget";
  import PomodoroTimer from "./components/PomodoroTimer";
  import MusicWidget from "./components/MusicWidget";
  import AnnouncementsWidget from "./components/AnnouncementsWidget";
  import OpportunityBoardWidget from "./components/OpportunityBoardWidget";
  import LeaderboardWidget from "./components/LeaderboardWidget";
  import GoogleCalendarWidget from "./components/GoogleCalenderWidget";
  import "./index.css";
  import SpreadsheetWidget from "./components/SpreadsheetWidget";
  import GoogleFormWidget from "./components/GoogleFormWidget";
  import Poll from "./components/Poll";
  import IssueTracker from "./components/IssueTracker";
  import Quotes from "./components/Quotes";
import InfoWidget from "./components/InfoWidget";

  // const widgets = [
  //   { id: "1", component: <GoogleSlidesWidget /> },
  //   { id: "2", component: <PomodoroTimer /> },
  //   { id: "3", component: <MusicWidget /> },
  //   { id: "4", component: <AnnouncementsWidget /> },
  //   { id: "5", component: <OpportunityBoardWidget /> },
  //   { id: "6", component: <LeaderboardWidget /> },
  //   { id: "7", component: <GoogleCalendarWidget /> },
  //   { id: "8", component: <SpreadsheetWidget /> },
  //   { id: "9", component: <GoogleFormWidget /> },
  //   { id: "10", component: <Poll /> },
  //   { id: "11", component: <IssueTracker /> },

  // ];

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
      <div className="app dark:bg-gray-900 dark:text-white min-h-screen">
        <header className="p-4 flex justify-between items-center">
        <h1 className="text-4xl text-gray-900 dark:text-gray-100 font-bold custom-font ml-[40px]">
          Hello <span className="text-blue-800">Developers,</span>
        </h1>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl text-blue-800 dark:text-white font-bold">
              {formatTime(currentDateTime)}
            </div>
            <div className="text-md font-bold text-gray-600 dark:text-white">
              {formatDate(currentDateTime)}
            </div>
          </div>
          <DarkModeToggle />
        </div>
      </header>
       <div className="flex mb-12">
          <div className="flex-none w-1/2">
            <GoogleSlidesWidget />
          </div>  
        <div className="flex flex-col w-1/2 pl-4 space-y-4">
          <div className="flex-none w-full">
              <AnnouncementsWidget />
          </div>
          <div className="flex w-full space-x-4">
            <div className="flex-1">
              <PomodoroTimer />
            
            </div>
            <div className="flex-1">
            <MusicWidget />
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mb-11">
      <div className="flex-1">
        <OpportunityBoardWidget />
      </div>
      <div className="flex-1">
        <Poll />
      </div>
      <div className="flex-1">
        <InfoWidget />
      </div>
    </div>
      <div className="flex space-x-4 mt-5 mb-5">
      <div className="flex-1">
        <SpreadsheetWidget />
      </div>
      <div className="flex-1">
        <GoogleCalendarWidget />
      </div>
      <div className="flex-1">       
        <GoogleFormWidget />
      </div>
    </div>
<LeaderboardWidget/>
        {/* <IssueTracker /> */}
       
      </div>
    );
  };

  export default App;
