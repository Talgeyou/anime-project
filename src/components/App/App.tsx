import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { routes } from "../../routes";
import { darkTheme } from "../../themes/dark.theme";
import { lightTheme } from "../../themes/light.theme";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light" as "dark" | "light");
  return (
    <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={
                <route.element
                  onThemeChange={setCurrentTheme}
                  currentTheme={currentTheme}
                />
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
