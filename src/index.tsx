import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/light.theme";
import { darkTheme } from "./themes/dark.theme";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={lightTheme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
