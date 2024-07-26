// // Poll.js

// import React, { useState } from 'react';

// const Poll = () => {
//   const [options, setOptions] = useState([
//     { id: 1, text: 'Option 1', votes: 0 },
//     { id: 2, text: 'Option 2', votes: 0 },
//     { id: 3, text: 'Option 3', votes: 0 },
//   ]);

//   const [selectedOption, setSelectedOption] = useState(null);
//   const [voted, setVoted] = useState(false);

//   const handleOptionChange = (id) => {
//     setSelectedOption(id);
//   };

//   const handleVote = () => {
//     if (selectedOption !== null) {
//       setOptions((prevOptions) =>
//         prevOptions.map((option) =>
//           option.id === selectedOption ? { ...option, votes: option.votes + 1 } : option
//         )
//       );
//       setVoted(true);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4 text-center">Poll</h1>
//       <ul className="space-y-4">
//         {options.map((option) => (
//           <li key={option.id} className="flex items-center">
//             <label className="flex items-center space-x-3">
//               <input
//                 type="radio"
//                 name="poll"
//                 value={option.id}
//                 checked={selectedOption === option.id}
//                 onChange={() => handleOptionChange(option.id)}
//                 disabled={voted}
//                 className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//               />
//               <span className="text-gray-700">{option.text}</span>
//             </label>
//           </li>
//         ))}
//       </ul>
//       <button
//         onClick={handleVote}
//         disabled={voted || selectedOption === null}
//         className={`mt-4 w-full py-2 px-4 text-white font-semibold rounded-lg shadow-md ${
//           voted
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
//         }`}
//       >
//         {voted ? 'Voted' : 'Vote'}
//       </button>

//       {voted && (
//         <div className="mt-6">
//           <h2 className="text-xl font-bold mb-2">Results:</h2>
//           <ul className="space-y-2">
//             {options.map((option) => (
//               <li key={option.id} className="flex justify-between">
//                 <span>{option.text}:</span>
//                 <span>{option.votes} votes</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Poll;

// src/Poll.js

import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa"; // Import thumbs-up icon

const Poll = () => {
  const [options, setOptions] = useState([
    { id: 1, text: "Frontend", votes: 0 },
    { id: 2, text: "Backend", votes: 0 },
    { id: 3, text: "Fullstack", votes: 0 },
  ]);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = (id) => {
    setOptions((options) =>
      options.map((option) => {
        if (option.id === id) {
          return { ...option, votes: option.votes + 1 };
        } else if (option.id === selectedOption) {
          return { ...option, votes: option.votes - 1 };
        }
        return option;
      })
    );
    setSelectedOption(id);
  };

  const totalVotes = options.reduce((acc, option) => acc + option.votes, 0);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl bg-[#ffbaba] dark:bg-[#ff5252]">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center dark:text-white">
        Vote for Your Favorite Stack
      </h2>
      {options.map((option) => (
        <div onClick={() => handleVote(option.id)}
          key={option.id}
          className={`flex items-center justify-between p-3 mb-2  rounded-lg ${
            selectedOption === option.id ? "ring-2 ring-[#8F00FF]" : ""
          }`}
        >
          <span className="dark:text-white flex-1 text-lg font-medium text-gray-700">
            {option.text}
          </span>
          <button
            className={`flex items-center justify-center p-2 rounded-full transition-colors duration-300 ${
              selectedOption === option.id
                ? "bg-[#8F00FF]"
                : "bg-gray-300 hover:bg-blue-400"
            }`}

          >
            <FaThumbsUp className="text-white" />
          </button>
        </div>
      ))}
      <div className="mt-6">
        <h3 className="dark:text-white  text-xl font-semibold text-gray-900 mb-2">Results:</h3>
        {options.map((option) => (
          <div key={option.id} className="mb-2">
            <div className="dark:text-white  flex justify-between mb-1 text-gray-700">
              <span>{option.text}</span>
              <span>
                {option.votes} votes (
                {totalVotes > 0
                  ? ((option.votes / totalVotes) * 100).toFixed(2)
                  : 0}
                %)
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    totalVotes > 0 ? (option.votes / totalVotes) * 100 : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poll;
