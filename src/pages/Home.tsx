import { useQuery } from "@apollo/client";
import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { SearchField } from "../components/SearchField/SearchField";
import { OngoingsQuery, TrendingQuery } from "../queries/Anime.query";

const HorizontalAnimeCardsList = React.lazy(() =>
  import(
    "../components/HorizontalAnimeCardsList/HorizontalAnimeCardsList"
  ).then((module) => ({ default: module.HorizontalAnimeCardsList }))
);

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
  return (
    <Layout>
      <SearchField />
      <Hero />
      <div style={{ padding: "0 40px" }}>
        {ongoingsLoading ? (
          <Loader />
        ) : ongoingsError ? null : ongoingsData ? (
          <React.Suspense fallback={<Loader />}>
            <HorizontalAnimeCardsList
              label={"Winter 2022 anime"}
              animeList={ongoingsData.Page.media}
            />
          </React.Suspense>
        ) : null}
        {trendingLoading ? (
          <Loader />
        ) : trendingError ? null : trendingData ? (
          <React.Suspense fallback={<Loader />}>
            <HorizontalAnimeCardsList
              label={"Trending anime"}
              animeList={trendingData.Page.media}
            />
          </React.Suspense>
        ) : null}
      </div>
    </Layout>
  );
});

Home.displayName = "MemoizedHome";
