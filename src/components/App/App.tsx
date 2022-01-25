import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "../../routes";

import styles from "./App.module.scss";

export const App = () => {
  let initialTheme = "light";
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
    initialTheme = savedTheme;
  } else {
    initialTheme = matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }
  const [currentTheme, setCurrentTheme] = useState(
    initialTheme as "dark" | "light"
  );

  const handleThemeChange = (theme: "dark" | "light") => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <div className={currentTheme === "light" ? styles.light : styles.dark}>
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
