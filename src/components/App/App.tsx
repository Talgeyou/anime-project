import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "../../routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
