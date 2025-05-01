import React from "react";
import { createContext, useState } from "react";

const ThemeChanger = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeChanger.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeChanger.Provider>
  );
}

export default ThemeContext;

//store
//provider
//wrap in the main file
//useContext
