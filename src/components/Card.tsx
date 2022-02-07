import React from "react";
import { NavLink } from "react-router-dom";
import { AnimeType } from "../types/Anime.type";

import styles from "../styles/Card.module.scss";
import { CharacterType } from "../types/Character.type";

interface Props {
    item: AnimeType | CharacterType;
    role?: string;
}

export const Card = React.memo((props: Props) => {
    const { item, role } = props;
    const anime = (item as AnimeType).title !== undefined ? (item as AnimeType) : null;
    const character = (item as CharacterType).name !== undefined ? (item as CharacterType) : null;
    const handleMouseDown = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
    };
    return (
        <article
            className={styles["card"]}
            aria-labelledby={`${anime ? "anime-" : character ? "character-" : null}card-${item.id}`}
        >
            {anime && anime.relationType ? (
                <h3 className={styles["card__label"]}>{(item as AnimeType).relationType}</h3>
            ) : null}
            {character && role ? <h4 className={styles["card__label"]}>{role}</h4> : null}
            <div className={styles["card-image"]}>
                {anime &&
                anime.coverImage &&
                (anime.coverImage.extraLarge ||
                    anime.coverImage.large ||
                    anime.coverImage.medium) ? (
                    <img
                        width={230}
                        height={325}
                        className={styles["card-image__picture"]}
                        src={anime.coverImage.large}
                        srcSet={`${anime.coverImage.large} 1440w`}
                        alt={`${
                            anime.title.english || anime.title.romaji || anime.title.native
                        } banner`}
                        loading="lazy"
                    />
                ) : null}
                {character &&
                character.image &&
                (character.image.large || character.image.medium) ? (
                    <img
                        className={styles["card-image__picture"]}
                        src={character.image.large}
                        srcSet={`${character.image.large} 768w, ${character.image.medium} 425w`}
                        alt={`${character.name.full} banner`}
                        loading="lazy"
                    />
                ) : null}
                <div className={styles["card-meta"]}>
                    {anime ? (
                        <>
                            <p className={styles["card-meta__text"]}>
                                Score: {anime.averageScore / 10}/10
                            </p>
                            <p className={styles["card-meta__text"]}>Format: {anime.format}</p>
                            <p className={styles["card-meta__text"]}>Status: {anime.status}</p>
                            <p className={styles["card-meta__text"]}>Episodes: {anime.episodes}</p>
                            <p className={styles["card-meta__text"]}>Duration: {anime.duration}</p>
                        </>
                    ) : null}

                    {character ? (
                        <>
                            <p className={styles["card-meta__text"]}>
                                Gender: {character.gender ? character.gender : "Unknown"}
                            </p>
                            <p className={styles["card-meta__text"]}>
                                Age: {character.age ? character.age : "Unknown"}
                            </p>
                        </>
                    ) : null}
                </div>
            </div>

            {anime ? (
                <NavLink to={`/anime/${anime.id}`} onMouseDown={handleMouseDown}>
                    <h4 id={`anime-card-${item.id}`} className={styles["card__title"]}>
                        {anime.title.english || anime.title.romaji || anime.title.native}
                    </h4>
                </NavLink>
            ) : null}

            {character ? (
                <h4 id={`character-card-${item.id}`} className={styles["card__title"]}>
                    {character.name.full}
                </h4>
            ) : null}
        </article>
    );
});

Card.displayName = "AnimeCard";
