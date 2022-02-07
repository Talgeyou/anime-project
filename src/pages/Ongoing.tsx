import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { AnimeList } from "../components/AnimeList";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { OngoingsQuery } from "../queries/Anime.query";
import { AnimeListType } from "../types/AnimeList.type";

type Props = {
    currentTheme: "dark" | "light" | "auto";
    onThemeChange: (theme: "dark" | "light" | "auto") => void;
};

export const Ongoing = (props: Props) => {
    const { currentTheme, onThemeChange } = props;
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") ? searchParams.get("page") : 1;
    const { loading, error, data } = useQuery(OngoingsQuery, {
        variables: {
            page: page,
            perPage: 50,
            sort: "START_DATE_DESC",
        },
    });

    if (loading)
        return (
            <Layout currentTheme={currentTheme} onThemeChange={onThemeChange}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Loader />
                </div>
            </Layout>
        );
    if (error)
        return (
            <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Loader />
                </div>
            </Layout>
        );
    if (data) {
        return (
            <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
                <AnimeList
                    animeList={data.Page as AnimeListType}
                    pagination={true}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />
            </Layout>
        );
    }
    return <h1>I don't know what has been happened xD</h1>;
};
