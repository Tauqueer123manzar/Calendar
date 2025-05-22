import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import {events} from '../../data/event';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Full Event Schedule</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
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