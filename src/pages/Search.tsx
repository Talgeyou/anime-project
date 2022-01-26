import React from "react";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { SearchQuery } from "../queries/Anime.query";

type Props = {
  currentTheme: "dark" | "light" | "auto";
  onThemeChange: (theme: "dark" | "light" | "auto") => void;
};

export const Search = (props: Props) => {
  const { currentTheme, onThemeChange } = props;
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
      <Layout currentTheme={currentTheme} onThemeChange={onThemeChange}>
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
    <Layout currentTheme={currentTheme} onThemeChange={onThemeChange}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    </Layout>
  );
};
