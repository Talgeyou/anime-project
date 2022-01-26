import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { AnimeDetails } from "../components/AnimeDetails/AnimeDetails";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { AnimeDetailsQuery } from "../queries/Anime.query";

type Props = {
  currentTheme: "dark" | "light" | "auto";
  onThemeChange: (theme: "dark" | "light" | "auto") => void;
};

export const Anime = (props: Props) => {
  const { currentTheme, onThemeChange } = props;
  const { id } = useParams();
  const { loading, error, data } = useQuery(AnimeDetailsQuery, {
    variables: { id },
  });
  return (
    <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Not Found</h1>
        </div>
      ) : data ? (
        <AnimeDetails anime={data.Media} />
      ) : null}
    </Layout>
  );
};
