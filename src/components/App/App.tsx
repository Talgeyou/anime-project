import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../../routes";

import styles from "../../styles/App.module.scss";

export const App = () => {
  let initialTheme = "light";
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
    initialTheme = savedTheme;
  } else {
    initialTheme = "auto";
  }
  const [currentTheme, setCurrentTheme] = useState(
    initialTheme as "dark" | "light" | "auto"
  );

  const handleThemeChange = (theme: "dark" | "light" | "auto") => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div
      className={
        currentTheme === "light"
          ? styles.light
          : currentTheme === "dark"
          ? styles.dark
          : undefined
      }
    >
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={
                <route.element
                  onThemeChange={handleThemeChange}
                  currentTheme={currentTheme}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
