import React from "react";
import { AnimeType } from "../../types/Anime.type";
import { Slider } from "../Slider/Slider";

import styles from "../../styles/CardsList.module.scss";
import { CharacterListType } from "../../types/CharacterList.type";
import { Card } from "../Card/Card";
import { CharactersEdgeType } from "../../types/CharactersEdge.type";

type Props = { label?: string; itemsList: AnimeType[] | CharacterListType };

export const HorizontalCardsList = React.memo((props: Props) => {
  const { itemsList, label } = props;

  const animes =
    (itemsList as CharacterListType).edges === undefined
      ? (itemsList as AnimeType[])
      : null;
  const characters =
    (itemsList as CharacterListType).edges !== undefined
      ? (itemsList as CharacterListType).edges
      : null;

  return (
    <section
      className={`${styles["cards-list"]} ${styles["cards-list--horizontal"]}`}
    >
      {label ? <h2 className={styles["cards-list__label"]}>{label}</h2> : null}
      {animes ? (
        <Slider
          items={animes.map((item: AnimeType) => (
            <Card key={item.id} item={item} />
          ))}
        />
      ) : null}

      {characters ? (
        <Slider
          items={characters.map((item: CharactersEdgeType) => (
            <Card key={item.id} item={item.node} role={item.role} />
          ))}
        />
      ) : null}
    </section>
  );
});

HorizontalCardsList.displayName = "HorizontalCardsList";
