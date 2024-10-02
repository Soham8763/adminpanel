import React from 'react';
import Sidebar from './components/SideBar';

const App = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="content p-4" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}

export default App;
