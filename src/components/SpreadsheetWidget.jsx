import React from 'react';

const SpreadsheetWidget = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <iframe
        src="https://docs.google.com/spreadsheets/d/1dnyKvYdU-lwXFPn0Ot9RSa2Rx5A89CRNj1i_Wp-GR0Q/edit?usp=sharing"
        width="100%"
        height="550"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="border-none"
        title="Google Spreadsheet"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default SpreadsheetWidget;
