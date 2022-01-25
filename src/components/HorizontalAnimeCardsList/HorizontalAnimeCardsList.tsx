import React from "react";
import { AnimeType } from "../../types/Anime.type";
import { AnimeCard } from "../AnimeCard/AnimeCard";
import { Slider } from "../Slider/Slider";

import styles from "../../styles/CardsList.module.scss";

type Props = { label?: string; animeList: AnimeType[] };

export const HorizontalAnimeCardsList = React.memo((props: Props) => {
  const { animeList, label } = props;
  return (
    <section
      className={`${styles["cards-list"]} ${styles["cards-list--horizontal"]}`}
    >
      {label ? <h2 className={styles["cards-list__label"]}>{label}</h2> : null}
      <Slider
        items={animeList.map((anime: AnimeType) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      />
    </section>
  );
});

HorizontalAnimeCardsList.displayName = "HorizontalAnimeCardsList";
