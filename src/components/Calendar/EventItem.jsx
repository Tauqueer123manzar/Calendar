import React from 'react';

const EventItem = ({ event }) => {
  return (
    <div 
      className="text-xs p-1 mb-1 rounded truncate shadow-sm border-l-2"
      style={{ 
        backgroundColor: `${event.color}20`,
        borderLeftColor: event.color,
        color: '#1f2937'
      }}
    >
      <div className="font-medium">{event.title}</div>
      <div className="text-xs opacity-80">{event.startTime} - {event.endTime}</div>
    </div>
  );
};

export default EventItem;