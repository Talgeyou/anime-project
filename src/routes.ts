import { Catalog } from "./pages/Home/Catalog";
import { Home } from "./pages/Home/Home";
import { Ongoing } from "./pages/Home/Ongoing";
import { Search } from "./pages/Home/Search";
import { Top } from "./pages/Home/Top";

export const routes = [
  { name: "Home", path: "/", element: Home, shouldDisplayInNavigation: false },
  {
    name: "Top 50",
    path: "/top",
    element: Top,
    shouldDisplayInNavigation: true,
  },
  {
    name: "Ongoings",
    path: "/ongoing",
    element: Ongoing,
    shouldDisplayInNavigation: true,
  },
  {
    name: "Catalog",
    path: "/catalog",
    element: Catalog,
    shouldDisplayInNavigation: true,
  },
  {
    name: "Search",
    path: "/search",
    element: Search,
    shouldDisplayInNavigation: false,
  },
];
