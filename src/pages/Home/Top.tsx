import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { useQuery } from "@apollo/client";
import { TopQuery } from "../../queries/Anime.query";
import { AnimeListType } from "../../types/AnimeList.type";
import { AnimeList } from "../../components/AnimeList/AnimeList";

export const Top = () => {
  const { loading, error, data } = useQuery(TopQuery, {
    variables: {
      page: 1,
      perPage: 50,
    },
  });

  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>error has been occured</h1>;
  if (data) {
    console.log(data);
    return (
      <Layout>
        <AnimeList animeList={data.Page as AnimeListType} />
      </Layout>
    );
  }
  return <h1>I don't know what has been happened xD</h1>;
};
