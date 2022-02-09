import React from "react";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { AnimeList } from "../components/AnimeList";
import { Loader } from "../components/Loader";
import { SearchQuery } from "../queries/Anime.query";

type Props = {};

export const Search = (props: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page");
    const search = searchParams.get("search");
    const variables: { page: number; perPage: number; search: string } = {
        page: Number(page) ? Number(page) : 1,
        perPage: 50,
        search: search ? search : "",
    };
    const { data } = useQuery(SearchQuery, {
        variables,
    });
    if (data) {
        return (
            <>
                {data.Page ? (
                    <AnimeList
                        animeList={data.Page}
                        pagination={true}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                    />
                ) : null}
            </>
        );
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Loader />
            </div>
        </>
    );
};
