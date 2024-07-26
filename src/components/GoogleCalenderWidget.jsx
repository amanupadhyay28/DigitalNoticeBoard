// import React, { useState } from 'react';
// import dayjs from 'dayjs';
// import 'dayjs/locale/en'; 
// const getDaysInMonth = (month, year) => {
//   const date = new Date(year, month, 1);
//   const days = [];
//   while (date.getMonth() === month) {
//     days.push(new Date(date));
//     date.setDate(date.getDate() + 1);
//   }
//   return days;
// };

// const GoogleCalendarWidget = () => {
//   const [currentDate, setCurrentDate] = useState(dayjs());
//   const daysInMonth = getDaysInMonth(currentDate.month(), currentDate.year());
//   const events = [
//     {
//       date: dayjs().date(5).toISOString(),
//       title: 'Team Meeting',
//     },
//     {
//       date: dayjs().date(10).toISOString(),
//       title: 'Project Deadline',
//     },
//     {
//       date: dayjs().date(20).toISOString(),
//       title: 'Company Holiday',
//     },
//   ];

//   const handlePrevMonth = () => {
//     setCurrentDate(currentDate.subtract(1, 'month'));
//   };

//   const handleNextMonth = () => {
//     setCurrentDate(currentDate.add(1, 'month'));
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
//         <button onClick={handlePrevMonth} className="hover:bg-blue-700 p-2 rounded">
//           &lt;
//         </button>
//         <h2 className="text-lg font-semibold">
//           {currentDate.format('MMMM YYYY')}
//         </h2>
//         <button onClick={handleNextMonth} className="hover:bg-blue-700 p-2 rounded">
//           &gt;
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-2 p-4">
//         {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//           <div key={day} className="text-center font-medium">
//             {day}
//           </div>
//         ))}
//         {daysInMonth.map((day) => {
//           const dayEvents = events.filter(
//             (event) => dayjs(event.date).isSame(day, 'day')
//           );
//           return (
//             <div key={day.toISOString()} className="h-24 border p-1">
//               <div
//                 className={`flex justify-center items-center ${
//                   dayjs().isSame(day, 'day') ? 'bg-blue-100 rounded-full' : ''
//                 }`}
//               >
//                 {day.getDate()}
//               </div>
//               <div className="mt-2 text-xs text-center">
//                 {dayEvents.map((event, index) => (
//                   <div key={index} className="bg-blue-200 rounded p-1 mt-1">
//                     {event.title}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default GoogleCalendarWidget;

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
  const [events, setEvents] = useState([
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
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState('');

  const daysInMonth = getDaysInMonth(currentDate.month(), currentDate.year());

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleOpenModal = (day) => {
    setSelectedDay(day);
    setNewEventTitle(''); // Reset event title when opening the modal
    setShowModal(true);
  };

  const handleAddEvent = () => {
    if (newEventTitle.trim() === '' || !selectedDay) return;

    setEvents([
      ...events,
      {
        date: selectedDay.toISOString(),
        title: newEventTitle,
      },
    ]);
    setNewEventTitle('');
    setShowModal(false);
  };

  const handleDeleteEvent = (event, e) => {
    e.stopPropagation(); 
    setEvents(events.filter(ev => ev !== event));
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <button onClick={handlePrevMonth} className="hover:bg-blue-700 p-2 rounded-full transition duration-300">
          &lt;
        </button>
        <h2 className="text-2xl font-bold">
          {currentDate.format('MMMM YYYY')}
        </h2>
        <button onClick={handleNextMonth} className="hover:bg-blue-700 p-2 rounded-full transition duration-300">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 p-2 text-center text-sm">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => {
          const dayEvents = events.filter(
            (event) => dayjs(event.date).isSame(day, 'day')
          );
          const hasEvents = dayEvents.length > 0;

          return (
            <div
              key={day.toISOString()}
              className="relative p-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer h-24"
              onClick={() => handleOpenModal(day)}
            >
              {hasEvents && (
                <button
                  onClick={(e) => handleDeleteEvent(
                    dayEvents[0], e
                  )}
                  className="absolute top-2 left-2 text-red-600 hover:text-red-800 text-lg"
                >
                  &#x1F5D1;
                </button>
              )}
              <div
                className={`absolute top-4 right-1 text-xs font-semibold ${
                  dayjs().isSame(day, 'day') ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {day.getDate()}
              </div>
              <div className="mt-8 text-xs">
                {dayEvents.map((event, index) => (
                  <div
                    key={index}
                    className="bg-blue-100 text-blue-800 rounded-md p-1 mt-1 text-center"
                  >
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 dark:text-black">
            <h3 className="text-lg font-semibold mb-4">Add Event</h3>
            <input
              type="text"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="border border-gray-300 p-2 rounded w-full"
              placeholder="Event Title"
            />
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEvent}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleCalendarWidget;
