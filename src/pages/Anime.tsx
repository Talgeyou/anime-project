import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { AnimeDetails } from "../components/AnimeDetails";
import { Loader } from "../components/Loader";
import { AnimeDetailsQuery } from "../queries/Anime.query";
import styles from "../styles/Layout.module.scss";

type Props = {};

export const Anime = (props: Props) => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(AnimeDetailsQuery, {
        variables: { id },
    });
    return (
        <>
            {loading ? (
                <div className={`${styles["container"]} ${styles["container--centered"]}`}>
                    <Loader />
                </div>
            ) : error ? (
                <div className={`${styles["container"]} ${styles["container--centered"]}`}>
                    <h1>Not Found</h1>
                </div>
            ) : data ? (
                <AnimeDetails anime={data.Media} />
            ) : null}
        </>
    );
};
