import React from "react";
import { AnimeDetailsType } from "../types/AnimeDetails.type";
import { HorizontalCardsList } from "./HorizontalCardsList";

import styles from "../styles/Details.module.scss";
import { Video } from "./Video";

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
        <article className={styles["details"]}>
            {anime.bannerImage ? (
                <div className={styles["details-image"]}>
                    <img
                        className={styles["details-image__picture"]}
                        src={anime.bannerImage}
                        alt={anime.title.english || anime.title.romaji || anime.title.native}
                    />
                </div>
            ) : null}
            <div className={styles["details-meta"]}>
                <h1 className={styles["details-meta__title"]}>
                    {anime.title.english || anime.title.romaji || anime.title.native}
                </h1>
                <p
                    className={styles["details-meta__description"]}
                    dangerouslySetInnerHTML={{ __html: anime.description }}
                />
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Season</span>:{" "}
                    {anime.season.charAt(0).toUpperCase() + anime.season.slice(1).toLowerCase()}
                </p>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Year</span>: {anime.seasonYear}
                </p>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Episodes</span>:{" "}
                    {anime.episodes}
                </p>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Duration</span>:{" "}
                    {anime.duration}
                </p>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Country</span>:{" "}
                    {anime.countryOfOrigin}
                </p>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Source</span>:{" "}
                    {anime.source.charAt(0) + anime.source.slice(1).toLowerCase()}
                </p>
                <div className={styles["details-meta__genres"]}>
                    <p className={styles["details-meta__label"]}>Genres:</p>
                    <ul className={styles["details-meta__genres-list"]}>
                        {anime.genres.map((genre: string) => (
                            <li key={genre} className={styles["details-meta-genres-list__items"]}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Score</span>:{" "}
                    {anime.averageScore / 10}/10
                </p>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>For Adults</span>?:{" "}
                    {anime.isAdult ? "Yes" : "No"}
                </p>
                {anime.trailer && anime.trailer.site === "youtube" ? (
                    <div className={styles["details-meta__trailer"]}>
                        <h2 className={styles["details-meta__subtitle"]}>Trailer</h2>
                        <Video
                            title={anime.title.english}
                            link={anime.trailer.id}
                            thumbnailUrl={anime.trailer.thumbnail}
                        />
                    </div>
                ) : null}
                <HorizontalCardsList label={"Characters"} itemsList={anime.characters} />
                {relatedList.length > 0 ? (
                    <HorizontalCardsList label={"Related"} itemsList={relatedList} />
                ) : null}
            </div>
        </article>
    );
};
