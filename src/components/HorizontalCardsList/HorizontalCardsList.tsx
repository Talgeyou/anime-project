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
  const items =
    (itemsList as CharacterListType).edges !== undefined
      ? (itemsList as CharacterListType).edges
      : (itemsList as AnimeType[]);
  return (
    <section
      className={`${styles["cards-list"]} ${styles["cards-list--horizontal"]}`}
    >
      {label ? <h2 className={styles["cards-list__label"]}>{label}</h2> : null}
      <Slider
        items={items.map((item: AnimeType | CharactersEdgeType) => (
          <Card
            key={item.id}
            item={
              (item as CharactersEdgeType).node
                ? (item as CharactersEdgeType).node
                : (item as AnimeType)
            }
            role={
              (item as CharactersEdgeType).node
                ? (item as CharactersEdgeType).role
                : undefined
            }
          />
        ))}
      />
    </section>
  );
});

HorizontalCardsList.displayName = "HorizontalCardsList";
