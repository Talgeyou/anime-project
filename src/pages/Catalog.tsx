import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { AnimeList } from "../components/AnimeList/AnimeList";
import { Layout } from "../components/Layout/Layout";
import { Loader } from "../components/Loader/Loader";
import { SearchAnimeForm } from "../components/SearchAnimeForm/SearchAnimeForm";
import { CatalogQuery } from "../queries/Anime.query";
import { AnimeListType } from "../types/AnimeList.type";

import styles from "./Catalog.module.scss";

type Props = {
  currentTheme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
};

export const Catalog = (props: Props) => {
  const { currentTheme, onThemeChange } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const format = searchParams.get("format");
  const status = searchParams.get("status");
  const episodes = searchParams.get("episodes");
  const releaseYear = searchParams.get("releaseYear");
  const isAdult = searchParams.get("isAdult");
  const sort = searchParams.get("sort");
  const variables: {
    page: number;
    perPage: number;
    format?: string;
    status?: string;
    episodes?: number;
    releaseYear?: number;
    isAdult?: boolean;
    sort?: string;
  } = {
    page: page && Number(page) ? Number(page) : 1,
    perPage: 50,
  };
  if (format) {
    variables.format = format;
  }
  if (status) {
    variables.status = status;
  }
  if (episodes && Number(episodes)) {
    variables.episodes = Number(episodes);
  }
  if (releaseYear && Number(releaseYear)) {
    variables.releaseYear = Number(releaseYear);
  }
  if (isAdult === "true" || isAdult === "false") {
    variables.isAdult = isAdult === "true";
  }
  if (sort) {
    variables.sort = sort;
  }
  const { data } = useQuery(CatalogQuery, {
    variables,
  });

  return (
    <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
      <section className={styles.catalog}>
        {data ? (
          <>
            <AnimeList
              animeList={data.Page as AnimeListType}
              pagination={true}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
            <SearchAnimeForm
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        )}
      </section>
    </Layout>
  );
};
