import React from "react";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Intro() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <h1 className="text-3xl font-bold mb-6">Theme Changer</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Intro;
