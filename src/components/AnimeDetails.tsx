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
                <p className={styles["details-meta__text"]}>Season: {anime.season}</p>
                <p className={styles["details-meta__text"]}>Year: {anime.seasonYear}</p>
                <p className={styles["details-meta__text"]}>Episodes: {anime.episodes}</p>
                <p className={styles["details-meta__text"]}>Duration: {anime.duration}</p>
                <p className={styles["details-meta__text"]}>Country: {anime.countryOfOrigin}</p>
                <p className={styles["details-meta__text"]}>Source: {anime.source}</p>
                <div className={styles["details-meta-genres"]}>
                    <p className={styles["details-meta-genres__label"]}>Genres:</p>
                    <ul className={styles["details-meta-genres-list"]}>
                        {anime.genres.map((genre: string) => (
                            <li key={genre} className={styles["details-meta-genres-list__items"]}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className={styles["details-meta__text"]}>Score: {anime.averageScore / 10}</p>
                <p className={styles["details-meta__text"]}>
                    ForAdult?: {anime.isAdult ? "Yes" : "No"}
                </p>
                {anime.trailer && anime.trailer.site === "youtube" ? (
                    <>
                        <h2 className={styles["details-meta__description"]}>Trailer</h2>
                        <Video title={anime.title.english} link={anime.trailer.id} />
                    </>
                ) : null}
                <HorizontalCardsList label={"Characters"} itemsList={anime.characters} />
                {relatedList.length > 0 ? (
                    <HorizontalCardsList label={"Related"} itemsList={relatedList} />
                ) : null}
            </div>
        </article>
    );
};
