import React from 'react';
import { format } from 'date-fns';

const CalendarHeader = ({ currentDate, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <button 
        onClick={onPrev}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        &lt;
      </button>
      <h3 className="text-lg font-semibold">
        {format(currentDate, 'MMMM yyyy')}
      </h3>
      <button 
        onClick={onNext}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        &gt;
      </button>
    </div>
  );
};

export default CalendarHeader;