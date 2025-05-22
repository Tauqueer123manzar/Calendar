import React from 'react';
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay,
  parseISO,
  getDay
} from 'date-fns';
import EventItem from './EventItem';

const CalendarGrid = ({ currentDate, events }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Group events by date
  const eventsByDate = {};
  events.forEach(event => {
    const eventDate = format(parseISO(event.date), 'yyyy-MM-dd');
    if (!eventsByDate[eventDate]) {
      eventsByDate[eventDate] = [];
    }
    eventsByDate[eventDate].push(event);
  });

  // Add empty days at start for proper weekday alignment
  const startDay = getDay(monthStart);
  const calendarDays = [
    ...Array(startDay).fill(null),
    ...daysInMonth
  ];

  // Split into weeks
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
              <th 
                key={day} 
                className="py-3 px-2 text-center font-medium text-gray-600 text-sm"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex} className="border-b border-gray-200 last:border-b-0">
              {week.map((day, dayIndex) => {
                if (!day) {
                  return <td key={dayIndex} className="p-2 h-32 bg-gray-50"></td>;
                }
                
                const dayKey = format(day, 'yyyy-MM-dd');
                const dayEvents = eventsByDate[dayKey] || [];
                const isCurrentMonth = isSameMonth(day, currentDate);
                const isToday = isSameDay(day, new Date());
                
                return (
                  <td 
                    key={dayKey} 
                    className={`p-2 h-32 align-top ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'} ${
                      isToday ? 'border-l-4 border-blue-500' : ''
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      <span className={`text-sm font-medium ${
                        isToday 
                          ? 'bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center' 
                          : 'text-gray-700'
                      }`}>
                        {format(day, 'd')}
                      </span>
                      <div className="flex-1 overflow-y-auto mt-1 space-y-1">
                        {dayEvents.map(event => (
                          <EventItem key={event.id} event={event} />
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