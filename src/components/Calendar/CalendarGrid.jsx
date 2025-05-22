import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import EventItem from './EventItem';

const CalendarGrid = ({ currentDate, events }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Group events by date
  const eventsByDate = {};
  events.forEach(event => {
    const eventDate = new Date(event.date).toDateString();
    if (!eventsByDate[eventDate]) {
      eventsByDate[eventDate] = [];
    }
    eventsByDate[eventDate].push(event);
  });
  
  // Create chunks of 7 days (weeks)
  const weeks = [];
  for (let i = 0; i < daysInMonth.length; i += 7) {
    weeks.push(daysInMonth.slice(i, i + 7));
  }
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {weekdays.map(day => (
              <th key={day} className="py-2 text-center font-medium text-gray-600">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map(day => {
                const dayKey = day.toDateString();
                const dayEvents = eventsByDate[dayKey] || [];
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isToday = isSameDay(day, new Date());
                
                return (
                  <td 
                    key={dayKey} 
                    className={`border p-2 h-32 ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'} ${
                      isToday ? 'border-2 border-orange-500' : ''
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      <span className={`text-sm ${isToday ? 'font-bold text-orange-500' : ''}`}>
                        {format(day, 'd')}
                      </span>
                      <div className="flex-1 overflow-y-auto">
                        {dayEvents.map((event, index) => (
                          <EventItem key={index} event={event} />
                        ))}
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarGrid;