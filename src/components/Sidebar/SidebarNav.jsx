import React from 'react';

const SidebarNav = () => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-2">Home</h2>
      <ul className="space-y-2">
        {['Manage', 'Programs', 'Events', 'Memberships', 'Documents'].map((item) => (
          <li key={item} className="hover:text-orange-500 cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;