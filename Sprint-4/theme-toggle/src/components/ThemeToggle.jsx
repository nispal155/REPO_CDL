import React, { useState } from 'react';
import './theme.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'light' : 'dark';
  };

  return (
    <div className="theme-container">
      <h2>Theme Toggle</h2>
      <button onClick={toggleTheme} className="theme-btn">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
