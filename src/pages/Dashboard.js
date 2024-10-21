import React from 'react';
import NavComponent from '../components/NavComponent';

const Dashboard = () => {
  return (
    <div>
      <NavComponent />
      <h1>Dashboard Page</h1>
      <p>This is the Dashboard Page. You must be logged in to see this.</p>
    </div>
  );
};

export default Dashboard;
