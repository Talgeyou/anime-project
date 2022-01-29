import { AnimeListType } from "../../types/AnimeList.type";
import { Pagination } from "../Pagination/Pagination";
import { URLSearchParamsInit } from "react-router-dom";

import styles from "../../styles/CardsList.module.scss";
import { Card } from "../Card/Card";
import { AnimeType } from "../../types/Anime.type";
import { Switcher } from "../Switcher/Switcher";
import React, { useState } from "react";
import { CardLarge } from "../CardLarge/CardLarge";

interface Props {
    animeList: AnimeListType;
    pagination?: boolean;
    searchParams?: URLSearchParams;
    setSearchParams?: (
        nextInit: URLSearchParamsInit,
        navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined,
    ) => void;
}

export const AnimeList = (props: Props) => {
    const { animeList, pagination, setSearchParams, searchParams } = props;
    const [layout, setLayout] = useState("compact" as "compact" | "cozy");

    const handleLayoutChange: React.ChangeEventHandler<HTMLInputElement> = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { value } = event.currentTarget;
        if (value === "compact" || value === "cozy") {
            setLayout(value);
        }
    };

    return (
        <section className={styles["cards-list"]}>
            <Switcher value={layout} onChange={handleLayoutChange} />
            {pagination && setSearchParams && searchParams ? (
                <Pagination
                    currentPage={animeList.pageInfo.currentPage}
                    lastPage={animeList.pageInfo.lastPage}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />
            ) : null}
            <ul className={styles["cards-list-items"]}>
                {animeList && animeList.media
                    ? animeList.media.map((anime) => (
                          <li key={anime.id} className={styles["cards-list-items__item"]}>
                              {layout === "compact" ? (
                                  <Card item={anime as AnimeType} />
                              ) : layout === "cozy" ? (
                                  <CardLarge item={anime as AnimeType} />
                              ) : null}
                          </li>
                      ))
                    : null}
            </ul>
            {pagination && setSearchParams && searchParams ? (
                <Pagination
                    currentPage={animeList.pageInfo.currentPage}
                    lastPage={animeList.pageInfo.lastPage}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                />
            ) : null}
        </section>
    );
};
