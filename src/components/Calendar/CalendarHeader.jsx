import React from 'react';
import { format } from 'date-fns';

const CalendarHeader = ({ currentDate, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <button 
        onClick={onPrev}
        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <h3 className="text-xl font-semibold">
        {format(currentDate, 'MMMM yyyy')}
      </h3>
      <button 
        onClick={onNext}
        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default CalendarHeader;