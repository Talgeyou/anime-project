import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/Card.module.scss";
import { AnimeType } from "../types/Anime.type";

type Props = { item: AnimeType };

export const CardLarge = (props: Props) => {
    const { item } = props;
    return (
        <article className={styles["card--large"]}>
            <NavLink to={`/anime/${item.id}`}>
                <div className={styles.card__image}>
                    <img
                        width={230}
                        height={325}
                        className={styles["card__image-picture"]}
                        src={item.coverImage.large}
                        srcSet={`${item.coverImage.large} 1440w`}
                        alt={`${
                            item.title.english || item.title.romaji || item.title.native
                        } banner`}
                        loading="lazy"
                    />
                </div>{" "}
            </NavLink>
            <div className={styles["card__meta"]}>
                <h4 id={`anime-card-${item.id}`} className={styles["card__title"]}>
                    {item.title.english || item.title.romaji || item.title.native}
                </h4>
                <p className={styles["card__text"]}>Score: {item.averageScore / 10}/10</p>
                <p className={styles["card__text"]}>Format: {item.format}</p>
                <p className={styles["card__text"]}>Status: {item.status}</p>
                <p className={styles["card__text"]}>Episodes: {item.episodes}</p>
                <p className={styles["card__text"]}>Duration: {item.duration}</p>
                <p
                    className={styles.card__description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
            </div>
        </article>
    );
};
