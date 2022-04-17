import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./components/App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.anilist.co/",
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
);
