import React from "react";
import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const next = theme === "light" ? "dark" : "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      onClick={toggle}
    >
      <span className="theme-toggle-sun" aria-hidden />
      <span className="theme-toggle-moon" aria-hidden />
    </button>
  );
}

export default ThemeToggle;
