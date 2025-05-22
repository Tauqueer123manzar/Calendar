import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Calendar from '../components/Calendar/Calendar';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 overflow-auto bg-gray-50">
        <Calendar />
      </div>
    </div>
  );
};

export default Home;