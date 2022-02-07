import { Layout } from "../components/Layout";
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
    const { currentTheme, onThemeChange } = props;
    const { loading, error, data } = useQuery(TopQuery, {
        variables: {
            page: 1,
            perPage: 50,
        },
    });

    if (loading)
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
                <AnimeList animeList={data.Page as AnimeListType} />
            </Layout>
        );
    }
    return <h1>I don't know what has been happened xD</h1>;
};
