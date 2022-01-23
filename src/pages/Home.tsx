import { useQuery } from "@apollo/client";
import React, { useMemo } from "react";
import { Hero } from "../components/Hero/Hero";
import { HorizontalAnimeCardsList } from "../components/HorizontalAnimeCardsList/HorizontalAnimeCardsList";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { SearchField } from "../components/SearchField/SearchField";
import { OngoingsQuery, TrendingQuery } from "../queries/Anime.query";

export const Home = React.memo(() => {
  const {
    loading: ongoingsLoading,
    error: ongoingsError,
    data: ongoingsData,
  } = useQuery(OngoingsQuery, {
    variables: {
      page: 1,
      perPage: 50,
      sort: "POPULARITY_DESC",
    },
  });
  const {
    loading: trendingLoading,
    error: trendingError,
    data: trendingData,
  } = useQuery(TrendingQuery, {
    variables: {
      page: 1,
      perPage: 50,
      sort: "POPULARITY_DESC",
    },
  });
  const ongoingsAnimeList = useMemo(
    () => [...ongoingsData.Page.media],
    [ongoingsData.Page.media]
  );

  const trendingAnimeList = useMemo(
    () => [...trendingData.Page.media],
    [trendingData.Page.media]
  );
  return (
    <Layout>
      <SearchField />
      <Hero />
      <div style={{ padding: "0 40px" }}>
        {ongoingsLoading ? (
          <Loader />
        ) : ongoingsError ? null : ongoingsData ? (
          <HorizontalAnimeCardsList
            label={"Winter 2022 anime"}
            animeList={ongoingsAnimeList}
          />
        ) : null}
        {trendingLoading ? (
          <Loader />
        ) : trendingError ? null : trendingData ? (
          <HorizontalAnimeCardsList
            label={"Trending anime"}
            animeList={trendingAnimeList}
          />
        ) : null}
      </div>
    </Layout>
  );
});

Home.displayName = "MemoizedHome";
