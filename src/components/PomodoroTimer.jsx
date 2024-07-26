import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('pomodoro'); // 'pomodoro', 'shortBreak', 'longBreak'

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    } else if (time === 0) {
      clearInterval(interval);
      setIsActive(false);
      // Add sound or alert here if needed
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = (newMode) => {
    setIsActive(false);
    setMode(newMode);
    if (newMode === 'pomodoro') setTime(1500); // 25 minutes
    else if (newMode === 'shortBreak') setTime(300); // 5 minutes
    else if (newMode === 'longBreak') setTime(900); // 15 minutes
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const getModeClass = (buttonMode) => {
    return mode === buttonMode ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300';
  };

  const incrementTime = () => {
    setTime((prevTime) => prevTime + 60); // Add 1 minute
  };

  const decrementTime = () => {
    setTime((prevTime) => (prevTime > 60 ? prevTime - 60 : 0)); // Subtract 1 minute
  };

  return (
    <div className="flex flex-col items-center justify-center h-[430px] bg-gray-800 text-white rounded-2xl">
      <div className="flex space-x-4 mb-8 mt-5">
        <button
          className={`${getModeClass('pomodoro')} px-3 ml-2  rounded-full`}
          onClick={() => resetTimer('pomodoro')}
        >
          pomodoro
        </button>
        <button
          className={`${getModeClass('shortBreak')} px-3 rounded-full`}
          onClick={() => resetTimer('shortBreak')}
        >
          short break
        </button>
        <button
          className={`${getModeClass('longBreak')} px-3 py-1 rounded-full mr-8`}
          onClick={() => resetTimer('longBreak')}
        >
          long break
        </button>
      </div>
      <div className="relative mb-8 flex justify-center items-center">
        <div className={`relative w-56 h-56 rounded-full border-8 ${isActive ? 'border-green-500' : 'border-red-500'} flex items-center justify-center ${!isActive ? 'hover:scale-105 transition-transform duration-300' : ''}`}>
          {isActive && <div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse bg-green-500 opacity-50"></div>}
          <div className="relative text-4xl">{formatTime(time)}</div>
        </div>
      </div>
      <div className="flex space-x-3 mb-2">
        <button className="bg-blue-500 px-3 py-2 rounded-full text-md" onClick={decrementTime}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button
        className="bg-blue-500 px-3 py-2 rounded-full text-md"
        onClick={toggleTimer}
      >
        {isActive ? 'PAUSE' : 'START'}
      </button>   
        <button className="bg-blue-500 px-3 py-2 rounded-full text-md" onClick={incrementTime}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      
      </div>
     
    </div>
  );
};

export default PomodoroTimer;
