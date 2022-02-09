import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { AnimeList } from "../components/AnimeList";
import { Loader } from "../components/Loader";
import { OngoingsQuery } from "../queries/Anime.query";
import { AnimeListType } from "../types/AnimeList.type";

type Props = {};

export const Ongoing = (props: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") ? searchParams.get("page") : 1;
    const { loading, error, data } = useQuery(OngoingsQuery, {
        variables: {
            page: page,
            perPage: 50,
            sort: "POPULARITY_DESC",
        },
    });

    if (loading)
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
    if (error)
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
    if (data) {
        return (
            <>
                <AnimeList
                    animeList={data.Page as AnimeListType}
                    pagination={true}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />
            </>
        );
    }
    return <h1>I don't know what has been happened xD</h1>;
};
