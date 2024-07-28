import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const themes = {
  black: {
    header: "#000000",
    background: "#e6eefa",
    modeIcon: "⚫",
  },
  green: {
    header: "#227447",
    background: "#e6faec",
    modeIcon: "🟢",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("black");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "black" ? "green" : "black"));
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
