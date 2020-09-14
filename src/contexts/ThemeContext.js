import React, { useState, createContext, useContext, useMemo } from "react";

const ThemeContext = createContext();

function UseTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Context must be used within the Provider`);
  }
  return context;
}

function ThemeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const value = useMemo(() => [isDarkMode, setIsDarkMode], [isDarkMode]);
  return <ThemeContext.Provider value={value} {...props} />;
}

export { UseTheme, ThemeProvider };
