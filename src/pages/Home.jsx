import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Calendar from '../components/Calendar/Calendar';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Calendar />
      </div>
    </div>
  );
};

export default Home;