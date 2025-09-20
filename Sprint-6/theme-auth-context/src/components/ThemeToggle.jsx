import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { mode, switchTheme } = useTheme();

  return (
    <div className={`theme-box ${mode}`}>
      <h2>Theme Context</h2>
      <p>Current: {mode} mode</p>
      <button onClick={switchTheme}>
        Change to {mode === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
