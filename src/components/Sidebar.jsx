import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  //this is the function to check of the link is active or not for changing the color of the link 
  const isActive = (path) => location.pathname === path;
  return (
    <div className="sidebar bg-gray-800 text-white w-64 h-[100vw] p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link
            to="/dashboard"
            className={`block p-2 rounded ${
              isActive('/dashboard')
                ? 'bg-blue-600'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            Dashboard
          </Link>
        </li>

        <li className="mb-4">
          <Link
            to="/jobs"
            className={`block p-2 rounded ${
              isActive('/jobs')
                ? 'bg-blue-600'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            Jobs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
