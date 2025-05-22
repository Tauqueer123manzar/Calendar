import React from 'react';
import SidebarNav from './SidebarNav';
import SidebarDetails from './SidebarDetails';

const Sidebar = () => {
  return (
    <div className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 flex flex-col h-full shadow-xl">
      <h1 className="text-2xl font-bold mb-8 text-orange-400">Survey Sparrow</h1>
      <SidebarNav />
      <SidebarDetails />
    </div>
  );
};

export default Sidebar;