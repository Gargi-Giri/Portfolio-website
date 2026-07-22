import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

import styles from "./themeTrigger.module.css";

function ThemeTrigger() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute(
        "data-theme",
        savedTheme
      );
      return;
    }

    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";

    setTheme(systemTheme);

    document.documentElement.setAttribute(
      "data-theme",
      systemTheme
    );
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(newTheme);

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      "theme",
      newTheme
    );
  };

  return (
    <button
      className={styles.trigger}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <div
        className={`${styles.slider} ${
          theme === "dark"
            ? styles.dark
            : ""
        }`}
      >
        {theme === "light" ? (
          <HiSun />
        ) : (
          <HiMoon />
        )}
      </div>
    </button>
  );
}

export default ThemeTrigger;