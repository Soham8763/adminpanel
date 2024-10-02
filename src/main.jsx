import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);