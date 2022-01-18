import { useQuery } from "@apollo/client";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { AnimeList } from "../../components/AnimeList/AnimeList";
import { Layout } from "../../components/Layout/Layout";
import { Loader } from "../../components/Loader/Loader";
import { SearchQuery } from "../../queries/Anime.query";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const search = searchParams.get("search");
  const variables: { page: number; perPage: number; search: string } = {
    page: Number(page) ? Number(page) : 1,
    perPage: 50,
    search: search ? search : "",
  };
  const { data } = useQuery(SearchQuery, {
    variables,
  });
  if (data) {
    return (
      <Layout search={search}>
        {data.Page ? (
          <AnimeList
            animeList={data.Page}
            pagination={true}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        ) : null}
      </Layout>
    );
  }
  return (
    <Layout search={search}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
      </div>
    </Layout>
  );
};
