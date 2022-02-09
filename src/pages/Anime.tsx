import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { AnimeDetails } from "../components/AnimeDetails";
import { Loader } from "../components/Loader";
import { AnimeDetailsQuery } from "../queries/Anime.query";

type Props = {};

export const Anime = (props: Props) => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(AnimeDetailsQuery, {
        variables: { id },
    });
    return (
        <>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Loader />
                </div>
            ) : error ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <h1>Not Found</h1>
                </div>
            ) : data ? (
                <AnimeDetails anime={data.Media} />
            ) : null}
        </>
    );
};
