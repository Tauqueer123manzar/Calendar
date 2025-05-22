import React from 'react';

const EventItem = ({ event }) => {
  return (
    <div 
      className="text-xs p-1 mb-1 rounded truncate" 
      style={{ backgroundColor: event.color }}
    >
      <div className="font-medium">{event.title}</div>
      <div>{event.startTime} - {event.endTime}</div>
    </div>
  );
};

export default EventItem;