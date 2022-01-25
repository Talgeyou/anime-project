import React from "react";
import { NavLink } from "react-router-dom";
import { AnimeType } from "../../types/Anime.type";

import styles from "../../styles/Card.module.scss";

interface Props {
  anime: AnimeType;
}

export const AnimeCard = React.memo((props: Props) => {
  const { anime } = props;
  const handleMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <article className={styles["card"]}>
      {anime.relationType ? (
        <h3 className={styles["card__label"]}>{anime.relationType}</h3>
      ) : null}
      <div className={styles["card-image"]}>
        {anime.coverImage &&
        (anime.coverImage.extraLarge ||
          anime.coverImage.large ||
          anime.coverImage.medium) ? (
          <img
            className={styles["card-image__picture"]}
            src={anime.coverImage.extraLarge}
            srcSet={`${anime.coverImage.extraLarge} 1440w, ${anime.coverImage.large} 768w, ${anime.coverImage.medium} 425w`}
            alt={`${
              anime.title.english || anime.title.romaji || anime.title.native
            } banner`}
            loading="lazy"
          />
        ) : null}
        <div className={styles["card-meta"]}>
          <p className={styles["card-meta__text"]}>
            Score: {anime.averageScore / 10}/10
          </p>
          <p className={styles["card-meta__text"]}>Format: {anime.format}</p>
          <p className={styles["card-meta__text"]}>Status: {anime.status}</p>
          <p className={styles["card-meta__text"]}>
            Episodes: {anime.episodes}
          </p>
          <p className={styles["card-meta__text"]}>
            Duration: {anime.duration}
          </p>
        </div>
      </div>

      <NavLink to={`/anime/${anime.id}`} onMouseDown={handleMouseDown}>
        <h4 className={styles["card__title"]}>
          {anime.title.english || anime.title.romaji || anime.title.native}
        </h4>
      </NavLink>
    </article>
  );
});

AnimeCard.displayName = "AnimeCard";
