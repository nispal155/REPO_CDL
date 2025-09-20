import React, { createContext, useState, useContext } from "react";

// create a new context for theme data
const ThemeContext = createContext();

// provider wrapper to supply theme + toggle function
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const switchTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ mode, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// handy hook so we don’t call useContext everywhere
export const useTheme = () => useContext(ThemeContext);
