import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import { events } from '../../data/events';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)); // May 2025
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Full Event Schedule</h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <CalendarHeader 
          currentDate={currentDate}
          onPrev={goToPreviousMonth}
          onNext={goToNextMonth}
        />
        <CalendarGrid currentDate={currentDate} events={events} />
      </div>
    </div>
  );
};

export default Calendar;