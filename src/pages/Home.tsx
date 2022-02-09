import { useQuery } from "@apollo/client";
import React from "react";
import { Hero } from "../components/Hero";
import { Loader } from "../components/Loader";
import { SearchField } from "../components/SearchField";
import { currentSeasonQuery, TrendingQuery } from "../queries/Anime.query";

const HorizontalCardsList = React.lazy(() =>
    import("../components/HorizontalCardsList").then((module) => ({
        default: module.HorizontalCardsList,
    })),
);

type Props = {};

export const Home = React.memo((props: Props) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentSeasonNumber = Math.floor(currentMonth / 3);
    let currentSeason = null as null | "WINTER" | "SPRING" | "SUMMER" | "FALL";
    switch (currentSeasonNumber) {
        case 0:
            currentSeason = "WINTER";
            break;
        case 1:
            currentSeason = "SPRING";
            break;
        case 2:
            currentSeason = "SUMMER";
            break;
        case 3:
            currentSeason = "FALL";
            break;
        default:
            currentSeason = null;
    }
    const currentSeasonAnimeVariables = {
        page: 1,
        perPage: 50,
        sort: "POPULARITY_DESC",
        season: currentSeason,
        seasonYear: currentYear,
    };
    console.log({ ...currentSeasonAnimeVariables });
    const {
        loading: ongoingsLoading,
        error: ongoingsError,
        data: ongoingsData,
    } = useQuery(currentSeasonQuery, {
        variables: currentSeasonAnimeVariables,
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
        <>
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
                                label={`${
                                    currentSeason
                                        ? currentSeason?.charAt(0).toUpperCase() +
                                          currentSeason?.slice(1).toLowerCase()
                                        : null
                                } ${currentYear} anime`}
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
        </>
    );
});

Home.displayName = "MemoizedHome";
