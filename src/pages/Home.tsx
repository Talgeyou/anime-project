import { useQuery } from "@apollo/client";
import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { SearchField } from "../components/SearchField/SearchField";
import { currentSeasonQuery, TrendingQuery } from "../queries/Anime.query";

const HorizontalAnimeCardsList = React.lazy(() =>
  import(
    "../components/HorizontalAnimeCardsList/HorizontalAnimeCardsList"
  ).then((module) => ({ default: module.HorizontalAnimeCardsList }))
);

type Props = {
  currentTheme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
};

export const Home = React.memo((props: Props) => {
  const { currentTheme, onThemeChange } = props;
  const {
    loading: ongoingsLoading,
    error: ongoingsError,
    data: ongoingsData,
  } = useQuery(currentSeasonQuery, {
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
    <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
      <SearchField />
      <Hero />
      <div style={{ padding: "0 40px" }}>
        {ongoingsLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        ) : ongoingsError ? null : ongoingsData ? (
          <div>
            <React.Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Loader />
                </div>
              }
            >
              <HorizontalAnimeCardsList
                label={"Winter 2022 anime"}
                animeList={ongoingsData.Page.media}
              />
            </React.Suspense>
          </div>
        ) : null}
        {trendingLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        ) : trendingError ? null : trendingData ? (
          <div>
            <React.Suspense
              fallback={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Loader />
                </div>
              }
            >
              <HorizontalAnimeCardsList
                label={"Trending anime"}
                animeList={trendingData.Page.media}
              />
            </React.Suspense>
          </div>
        ) : null}
      </div>
    </Layout>
  );
});

Home.displayName = "MemoizedHome";
