import React from 'react';

const SidebarDetails = () => {
  return (
    <div className="mt-auto">
      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Details</h2>
        <p className="text-gray-600">Member - <span className="text-blue-600">25 out of 30</span></p>
        <p className="text-gray-600">Time - <span className="text-blue-600">3:00 PM - 4:00 PM</span></p>
      </div>
      
      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Event Days</h2>
        <div className="flex space-x-2">
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">Mon</span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">Thu</span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">MN</div>
          <div>
            <h3 className="font-semibold">Md Tauqueer Manzar</h3>
            <p className="text-sm text-gray-500">smarrowiny@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDetails;