import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { CharacterDetails } from "../components/CharacterDetails";
import { Loader } from "../components/Loader";
import { CharacterDetailsQuery } from "../queries/Anime.query";

type Props = {};

export const Character = (props: Props) => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(CharacterDetailsQuery, {
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
                <CharacterDetails character={data.Character} />
            ) : null}
        </>
    );
};
