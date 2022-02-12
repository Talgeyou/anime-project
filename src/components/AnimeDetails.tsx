import React from "react";
import { AnimeDetailsType } from "../types/AnimeDetails.type";
import { HorizontalCardsList } from "./HorizontalCardsList";

import styles from "../styles/Details.module.scss";
import { Video } from "./Video";
import { Typography } from "./Typography";

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
                <div className={styles["details__image-wrapper"]}>
                    <img
                        className={styles["details__picture"]}
                        src={anime.bannerImage}
                        alt={anime.title.english || anime.title.romaji || anime.title.native}
                    />
                </div>
            ) : null}

            <div className={styles["details__meta"]}>
                <Typography variant={"h1"}>
                    {anime.title.english || anime.title.romaji || anime.title.native}
                </Typography>

                <Typography
                    variant={"body"}
                    dangerouslySetInnerHTML={{ __html: anime.description }}
                />

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>Season</span>:{" "}
                    {anime.season.charAt(0).toUpperCase() + anime.season.slice(1).toLowerCase()}
                </Typography>

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>Year</span>: {anime.seasonYear}
                </Typography>

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>Episodes</span>: {anime.episodes}
                </Typography>

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>Duration</span>: {anime.duration}
                </Typography>

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>Country</span>:{" "}
                    {anime.countryOfOrigin}
                </Typography>

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>Source</span>:{" "}
                    {anime.source.charAt(0) + anime.source.slice(1).toLowerCase()}
                </Typography>

                <div className={styles["details__genres"]}>
                    <span className={styles["details__label"]}>Genres:</span>
                    <ul className={styles["details__genres-list"]}>
                        {anime.genres.map((genre: string) => (
                            <li key={genre} className={styles["details-genres-list__items"]}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>Score</span>:{" "}
                    {anime.averageScore / 10}/10
                </Typography>

                <Typography variant={"body"}>
                    <span className={styles["details__label"]}>For Adults</span>?:{" "}
                    {anime.isAdult ? "Yes" : "No"}
                </Typography>
            </div>
            {anime.trailer && anime.trailer.site === "youtube" ? (
                <div className={styles["details__trailer"]}>
                    <Typography variant={"h2"}>Trailer</Typography>
                    <Video
                        title={anime.title.english}
                        link={anime.trailer.id}
                        thumbnailUrl={anime.trailer.thumbnail}
                    />
                </div>
            ) : null}

            <div className={styles["details__characters"]}>
                <HorizontalCardsList label={"Characters"} itemsList={anime.characters} />
            </div>

            {relatedList.length > 0 ? (
                <div className={styles["details__related"]}>
                    <HorizontalCardsList label={"Related"} itemsList={relatedList} />
                </div>
            ) : null}
        </article>
    );
};
