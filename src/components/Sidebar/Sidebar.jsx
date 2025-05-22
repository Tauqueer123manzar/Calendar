import React from 'react';
import SidebarNav from './SidebarNav';
import SidebarDetails from './SidebarDetails';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">KarałeStudio</h1>
      <SidebarNav />
      <SidebarDetails />
    </div>
  );
};

export default Sidebar;