import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  // State to manage the theme
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Context object with properties and values
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Function to use the context
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
