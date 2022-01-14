import { Catalog } from "./pages/Home/Catalog";
import { Home } from "./pages/Home/Home";
import { Ongoing } from "./pages/Home/Ongoing";
import { Top } from "./pages/Home/Top";

export const routes = [
  { name: "Home", path: "/", element: Home },
  { name: "Top 50", path: "/top", element: Top },
  { name: "Ongoings", path: "/ongoing", element: Ongoing },
  { name: "Catalog", path: "/catalog", element: Catalog },
];
