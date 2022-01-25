import React from "react";
import { AnimeDetailsType } from "../../types/AnimeDetails.type";
import { HorizontalAnimeCardsList } from "../HorizontalAnimeCardsList/HorizontalAnimeCardsList";
import { HorizontalCharacterCardsList } from "../HorizontalCharacterCardsList/HorizontalCharacterCardsList";

import styles from "./AnimeDetails.module.scss";

type Props = {
  anime: AnimeDetailsType;
};

export const AnimeDetails = (props: Props) => {
  const { anime } = props;
  const relatedList = anime.relations.edges
    .filter((edge) => edge.node.type === "ANIME")
    .map((edge) => {
      const anime = { ...edge.node };
      anime.relationType = edge.relationType;
      return anime;
    });
  return (
    <article className={styles["anime-details"]}>
      {anime.bannerImage ? (
        <div className={styles["anime-details-image"]}>
          <img
            className={styles["anime-details-image__picture"]}
            src={anime.bannerImage}
            alt={
              anime.title.english || anime.title.romaji || anime.title.native
            }
          />
        </div>
      ) : null}
      <div className={styles["anime-details-meta"]}>
        <h1 className={styles["anime-details-meta__title"]}>
          {anime.title.english || anime.title.romaji || anime.title.native}
        </h1>
        <p
          className={styles["anime-details-meta__description"]}
          dangerouslySetInnerHTML={{ __html: anime.description }}
        />
        <p className={styles["anime-details-meta__text"]}>
          Season: {anime.season}
        </p>
        <p className={styles["anime-details-meta__text"]}>
          Year: {anime.seasonYear}
        </p>
        <p className={styles["anime-details-meta__text"]}>
          Episodes: {anime.episodes}
        </p>
        <p className={styles["anime-details-meta__text"]}>
          Duration: {anime.duration}
        </p>
        <p className={styles["anime-details-meta__text"]}>
          Country: {anime.countryOfOrigin}
        </p>
        <p className={styles["anime-details-meta__text"]}>
          Source: {anime.source}
        </p>
        <div className={styles["anime-details-meta-genres"]}>
          <p className={styles["anime-details-meta-genres__label"]}>Genres:</p>
          <ul className={styles["anime-details-meta-genres-list"]}>
            {anime.genres.map((genre: string) => (
              <li
                key={genre}
                className={styles["anime-details-meta-genres-list__items"]}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <p className={styles["anime-details-meta__text"]}>
          Score: {anime.averageScore / 10}
        </p>
        <p className={styles["anime-details-meta__text"]}>
          ForAdult?: {anime.isAdult ? "Yes" : "No"}
        </p>
        <HorizontalCharacterCardsList
          label={"Characters"}
          characterList={anime.characters}
        />
        {relatedList.length > 0 ? (
          <HorizontalAnimeCardsList label={"Related"} animeList={relatedList} />
        ) : null}
      </div>
    </article>
  );
};
