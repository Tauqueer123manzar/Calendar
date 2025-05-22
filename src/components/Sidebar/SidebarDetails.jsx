import React from 'react';

const SidebarDetails = () => {
  return (
    <div className="mt-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Details</h2>
        <p>Member - 25 out of 30</p>
        <p>Time - 300 PM - 400 PM</p>
      </div>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Event Days</h2>
        <p>Mon Thu</p>
      </div>
      
      <div className="border-t pt-4">
        <h3 className="font-semibold mb-2">Elijah Scott</h3>
        <p className="text-sm text-gray-600">scotthelp@iny.com</p>
      </div>
    </div>
  );
};

export default SidebarDetails;