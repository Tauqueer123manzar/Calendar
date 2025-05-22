import React from 'react';

const SidebarNav = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-300">Home</h2>
      <ul className="space-y-3">
        {['Manage', 'Programs', 'Events', 'Memberships', 'Documents'].map((item) => (
          <li 
            key={item} 
            className="hover:text-orange-400 cursor-pointer transition-colors duration-200 flex items-center py-2 px-3 rounded-lg hover:bg-gray-700"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;