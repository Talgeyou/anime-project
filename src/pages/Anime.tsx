import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { AnimeDetails } from "../components/AnimeDetails/AnimeDetails";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { AnimeDetailsQuery } from "../queries/Anime.query";

export const Anime = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(AnimeDetailsQuery, {
    variables: { id },
  });
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>Not Found</h1>
      ) : data ? (
        <AnimeDetails anime={data.Media} />
      ) : null}
    </Layout>
  );
};
