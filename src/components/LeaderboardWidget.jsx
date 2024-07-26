// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const data = [
//   { label: "Most steps walked", value: 8500, maxValue: 10000, color: "#4caf50" },
//   { label: "Most pages read", value: 200, maxValue: 250, color: "#2196f3" },
//   { label: "Most pomodoro timers", value: 10, maxValue: 12, color: "#ff9800" },
// ];

// const LeaderboardWidget = () => {
//   return (
//       <div className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl w-full">
//         <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">
//           Leaderboard
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <div key={index} className="flex flex-col items-center p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
//               <div className="w-32 h-32">
//                 <CircularProgressbar
//                   value={item.value}
//                   maxValue={item.maxValue}
//                   text={`${item.value}/${item.maxValue}`}
//                   styles={buildStyles({
//                     textSize: "16px",
//                     pathColor: item.color,
//                     textColor: "#333",
//                     trailColor: "#e0e0e0",
//                   })}
//                 />
//               </div>
//               <div className="mt-4 text-center text-lg font-semibold text-gray-700">
//                 {item.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//   );
// };

// export default LeaderboardWidget;

import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './LeaderBoardWidget.css'; // Import custom CSS for animations

const data = [
  { label: 'Most steps walked', value: 8500, maxValue: 10000, color: '#4caf50' },
  { label: 'Most pages read', value: 200, maxValue: 250, color: '#2196f3' },
  { label: 'Most pomodoro timers', value: 10, maxValue: 12, color: '#ff9800' },
];

const LeaderboardWidget = () => {
  const [progress, setProgress] = useState(data.map(() => 0));

  useEffect(() => {
    data.forEach((item, index) => {
      let start = 0;
      const end = item.value;
      const duration = 1500; // Duration in milliseconds
      const stepTime = 10; // Update interval in milliseconds
      const steps = duration / stepTime;

      const interval = setInterval(() => {
        start += end / steps;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setProgress((prev) => {
          const newProgress = [...prev];
          newProgress[index] = start;
          return newProgress;
        });
      }, stepTime);
    });
  }, []);

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto dark:bg-gray-300">
      <h3 className="text-4xl font-extrabold mb-10 text-center text-blue-800 animate__animated animate__fadeIn ">
        Leaderboard
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl hover:scale-100 "
          >
            <div className="w-40 h-40 mb-4">
              <CircularProgressbar
              className='hover:scale-110 animate__animated animate__fadeIn animate__delay-1s' 
                value={progress[index]}
                maxValue={item.maxValue}
                text={`${Math.round(progress[index])}/${item.maxValue}`}
                styles={buildStyles({
                  textSize: '12px',
                  pathColor: item.color,
                  textColor: '#333',
                  trailColor: '#e0e0e0',
                })}
              />
            </div>
            <div className="text-center text-xl font-semibold text-gray-800">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardWidget;
