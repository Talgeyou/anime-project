import React from "react";
import { AnimeType } from "../types/Anime.type";
import { Slider } from "./Slider";

import styles from "../styles/CardsList.module.scss";
import { CharacterListType } from "../types/CharacterList.type";
import { Card } from "./Card";
import { CharactersEdgeType } from "../types/CharactersEdge.type";
import { Typography } from "./Typography";

type Props = { label?: string; itemsList: AnimeType[] | CharacterListType };

export const HorizontalCardsList = React.memo((props: Props) => {
    const { itemsList, label } = props;

    const animes =
        (itemsList as CharacterListType).edges === undefined ? (itemsList as AnimeType[]) : null;
    const characters =
        (itemsList as CharacterListType).edges !== undefined
            ? (itemsList as CharacterListType).edges
            : null;

    return (
        <section className={`${styles["cards-list"]} ${styles["cards-list--horizontal"]}`}>
            {label ? <Typography variant={"h2"}>{label}</Typography> : null}
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
