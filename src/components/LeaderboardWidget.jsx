import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const data = [
  { label: "Most steps walked", value: 12000, maxValue: 15000, color: "#4caf50" },
  { label: "Most pages read", value: 200, maxValue: 250, color: "#2196f3" },
  { label: "Most pomodoro timers", value: 10, maxValue: 12, color: "#ff9800" },
];

const LeaderboardWidget = () => {
  return (
    <div className="flex  justify-center items-center">
   <div className="widget leaderboard bg-white shadow-md rounded-lg p-4 m-4">
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-700">
        Leaderboard
      </h3>
      <div className="flex flex-row justify-around items-center space-x-4">
        {data.map((item, index) => (
          <div key={index} className="w-24 h-24 flex flex-col items-center">
            <CircularProgressbar
              value={item.value}
              maxValue={item.maxValue}
              text={`${item.value}/${item.maxValue}`}
              styles={buildStyles({
                textSize: "12px",
                pathColor: item.color,
                textColor: "#333",
                trailColor: "#d6d6d6",
              })}
            />
            <div className="text-center mt-2 text-sm font-medium text-gray-600">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  
    </div>
  );
};

export default LeaderboardWidget;
