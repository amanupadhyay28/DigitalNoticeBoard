import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css';

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      if (isBreak) {
        setSeconds(1500); // 25 minutes
        setIsBreak(false);
      } else {
        setSeconds(300); // 5 minutes break
        setIsBreak(true);
      }
      setIsActive(false);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, isBreak]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(isBreak ? 300 : 1500);
  };

  const getCircularProgress = () => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const progress = ((seconds / (isBreak ? 300 : 1500)) * circumference).toFixed(2);
    return progress;
  };

  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    // <div className="pomodoro-timer">
      <div className={`timer-glassmorphic bg-[#B1BBD1] ${isBreak ? 'break' : isActive ? 'active' : 'paused'}`}>
        <div className="progress-ring">
          <svg width="140" height="140">
            <circle
              className="progress-ring__circle"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              r="60"
              cx="70"
              cy="70"
              // strokeDasharray={`${getCircularProgress()} ${2 * Math.PI * 60}`}
            />
          </svg>
          <div className="time">
            {minutes}:{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}
          </div>
        </div>
        <div className="buttons">
          <button onClick={toggleTimer} className="control-button">
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={resetTimer} className="control-button">Reset</button>
        </div>
      </div>
    // </div>
  );
};
PomodoroTimer.displayName = 'PomodoroTimer';
export default PomodoroTimer;
