import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; 
const getDaysInMonth = (month, year) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const GoogleCalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const daysInMonth = getDaysInMonth(currentDate.month(), currentDate.year());
  const events = [
    {
      date: dayjs().date(5).toISOString(),
      title: 'Team Meeting',
    },
    {
      date: dayjs().date(10).toISOString(),
      title: 'Project Deadline',
    },
    {
      date: dayjs().date(20).toISOString(),
      title: 'Company Holiday',
    },
  ];

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <button onClick={handlePrevMonth} className="hover:bg-blue-700 p-2 rounded">
          &lt;
        </button>
        <h2 className="text-lg font-semibold">
          {currentDate.format('MMMM YYYY')}
        </h2>
        <button onClick={handleNextMonth} className="hover:bg-blue-700 p-2 rounded">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 p-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => {
          const dayEvents = events.filter(
            (event) => dayjs(event.date).isSame(day, 'day')
          );
          return (
            <div key={day.toISOString()} className="h-24 border p-1">
              <div
                className={`flex justify-center items-center ${
                  dayjs().isSame(day, 'day') ? 'bg-blue-100 rounded-full' : ''
                }`}
              >
                {day.getDate()}
              </div>
              <div className="mt-2 text-xs text-center">
                {dayEvents.map((event, index) => (
                  <div key={index} className="bg-blue-200 rounded p-1 mt-1">
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoogleCalendarWidget;
