import useLocalStorage from './useLocalStorage';
import React, { useEffect } from "react";

const useDarkMode = (value) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", value ? value : false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, toggleMode];
};

export default useDarkMode;