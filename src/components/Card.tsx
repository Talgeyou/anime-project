import React from "react";
import { NavLink } from "react-router-dom";
import { AnimeType } from "../types/Anime.type";

import styles from "../styles/Card.module.scss";
import { CharacterType } from "../types/Character.type";
import { Typography } from "./Typography";

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
                <Typography className={styles["card__label"]} variant={"h3"}>
                    {(item as AnimeType).relationType}
                </Typography>
            ) : null}
            {character && role ? (
                <Typography className={styles["card__label"]} variant={"h3"}>
                    {role}
                </Typography>
            ) : null}
            <div className={styles["card__image-wrapper"]}>
                {anime &&
                anime.coverImage &&
                (anime.coverImage.extraLarge ||
                    anime.coverImage.large ||
                    anime.coverImage.medium) ? (
                    <img
                        width={230}
                        height={325}
                        className={styles["card__image"]}
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
                        className={styles["card__image"]}
                        src={character.image.large}
                        srcSet={`${character.image.large} 768w, ${character.image.medium} 425w`}
                        alt={`${character.name.full} banner`}
                        loading="lazy"
                    />
                ) : null}
                <div className={styles["card__meta"]}>
                    {anime ? (
                        <>
                            <Typography variant={"body"}>
                                Score: {anime.averageScore / 10}/10
                            </Typography>
                            <Typography variant={"body"}>Format: {anime.format}</Typography>
                            <Typography variant={"body"}>Status: {anime.status}</Typography>
                            <Typography variant={"body"}>Episodes: {anime.episodes}</Typography>
                            <Typography variant={"body"}>Duration: {anime.duration}</Typography>
                        </>
                    ) : null}

                    {character ? (
                        <>
                            <Typography variant={"body"}>
                                Gender: {character.gender ? character.gender : "Unknown"}
                            </Typography>
                            <Typography variant={"body"}>
                                Age: {character.age ? character.age : "Unknown"}
                            </Typography>
                        </>
                    ) : null}
                </div>
            </div>

            {anime ? (
                <NavLink to={`/anime/${anime.id}`} onMouseDown={handleMouseDown}>
                    <Typography
                        variant={"h4"}
                        id={`anime-card-${item.id}`}
                        className={styles["card__title"]}
                    >
                        {anime.title.english || anime.title.romaji || anime.title.native}
                    </Typography>
                </NavLink>
            ) : null}

            {character ? (
                <NavLink to={`/character/${character.id}`} onMouseDown={handleMouseDown}>
                    <Typography
                        variant={"h4"}
                        id={`character-card-${item.id}`}
                        className={styles["card__title"]}
                    >
                        {character.name.full}
                    </Typography>
                </NavLink>
            ) : null}
        </article>
    );
});

Card.displayName = "AnimeCard";
