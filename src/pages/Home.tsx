import { useQuery } from "@apollo/client";
import React from "react";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { Loader } from "../components/Loader";
import { SearchField } from "../components/SearchField";
import { currentSeasonQuery, TrendingQuery } from "../queries/Anime.query";

const HorizontalCardsList = React.lazy(() =>
    import("../components/HorizontalCardsList").then((module) => ({
        default: module.HorizontalCardsList,
    })),
);

type Props = {
    currentTheme: "dark" | "light" | "auto";
    onThemeChange: (theme: "dark" | "light" | "auto") => void;
};

export const Home = React.memo((props: Props) => {
    const { currentTheme, onThemeChange } = props;
    const {
        loading: ongoingsLoading,
        error: ongoingsError,
        data: ongoingsData,
    } = useQuery(currentSeasonQuery, {
        variables: {
            page: 1,
            perPage: 50,
            sort: "POPULARITY_DESC",
        },
    });
    const {
        loading: trendingLoading,
        error: trendingError,
        data: trendingData,
    } = useQuery(TrendingQuery, {
        variables: {
            page: 1,
            perPage: 50,
            sort: "POPULARITY_DESC",
        },
    });
    return (
        <Layout onThemeChange={onThemeChange} currentTheme={currentTheme}>
            <SearchField />
            <Hero />
            <div style={{ padding: "0 40px" }}>
                {ongoingsLoading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Loader />
                    </div>
                ) : ongoingsError ? null : ongoingsData ? (
                    <div>
                        <React.Suspense
                            fallback={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Loader />
                                </div>
                            }
                        >
                            <HorizontalCardsList
                                label={"Winter 2022 anime"}
                                itemsList={ongoingsData.Page.media}
                            />
                        </React.Suspense>
                    </div>
                ) : null}
                {trendingLoading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Loader />
                    </div>
                ) : trendingError ? null : trendingData ? (
                    <div>
                        <React.Suspense
                            fallback={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Loader />
                                </div>
                            }
                        >
                            <HorizontalCardsList
                                label={"Trending anime"}
                                itemsList={trendingData.Page.media}
                            />
                        </React.Suspense>
                    </div>
                ) : null}
            </div>
        </Layout>
    );
});

Home.displayName = "MemoizedHome";
