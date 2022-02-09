import { useQuery } from "@apollo/client";
import { TopQuery } from "../queries/Anime.query";
import { AnimeListType } from "../types/AnimeList.type";
import { AnimeList } from "../components/AnimeList";
import { Loader } from "../components/Loader";

type Props = {
    currentTheme: "dark" | "light" | "auto";
    onThemeChange: (theme: "dark" | "light" | "auto") => void;
};

export const Top = (props: Props) => {
    const { loading, error, data } = useQuery(TopQuery, {
        variables: {
            page: 1,
            perPage: 50,
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
                <AnimeList animeList={data.Page as AnimeListType} />
            </>
        );
    }
    return <h1>I don't know what has been happened xD</h1>;
};
