import React from "react";

const Anime = React.lazy(() =>
    import("./pages/Anime").then((module) => ({ default: module.Anime })),
);
const Catalog = React.lazy(() =>
    import("./pages/Catalog").then((module) => ({ default: module.Catalog })),
);
const Home = React.lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })));
const Ongoing = React.lazy(() =>
    import("./pages/Ongoing").then((module) => ({ default: module.Ongoing })),
);
const Search = React.lazy(() =>
    import("./pages/Search").then((module) => ({ default: module.Search })),
);
const Top = React.lazy(() => import("./pages/Top").then((module) => ({ default: module.Top })));

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
