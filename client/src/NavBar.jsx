import React from 'react';
import useDarkMode from './hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  
  return (
    <nav className="navbar">
      <h1>Women's World Cup</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;