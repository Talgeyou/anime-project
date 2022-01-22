import { Anime } from "./pages/Anime";
import { Catalog } from "./pages/Catalog";
import { Home } from "./pages/Home";
import { Ongoing } from "./pages/Ongoing";
import { Search } from "./pages/Search";
import { Top } from "./pages/Top";

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
  {
    name: "Anime",
    path: "/anime/:id",
    element: Anime,
    shouldDisplayInNavigation: false,
  },
];
