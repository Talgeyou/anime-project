import React, { useCallback } from "react";
import { URLSearchParamsInit } from "react-router-dom";

import styles from "./Pagination.module.scss";

interface Props {
  currentPage: number;
  lastPage: number;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined
  ) => void;
  searchParams: URLSearchParams;
}

export const Pagination = (props: Props) => {
  const { currentPage, lastPage, setSearchParams, searchParams } = props;
  const pages = new Set<number>();
  pages.add(1);
  pages.add(currentPage - 1);
  pages.add(currentPage);
  pages.add(currentPage + 1);
  pages.add(lastPage);

  const handleChangePageButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const pageNumber =
        event.currentTarget &&
        typeof event.currentTarget.getAttribute("data-id") === "string"
          ? event.currentTarget.getAttribute("data-id")
          : null;
      if (pageNumber) {
        searchParams.set("page", pageNumber);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  const elements: React.ReactNode[] = [];

  pages.forEach((number) => {
    if (number >= 1 && number <= lastPage) {
      if (number === currentPage - 1 && currentPage - 2 > 0) {
        elements.push(
          <div className={"pagination__gap"} key={"prefixGapPagination"}>
            ...
          </div>
        );
      }
      elements.push(
        <button
          className={
            currentPage === number
              ? `${styles["pagination__button"]} ${styles["pagination__button--active"]}`
              : styles["pagination__button"]
          }
          key={number}
          data-id={number}
          onClick={handleChangePageButtonClick}
        >
          {number}
        </button>
      );
      if (number === currentPage + 1 && number + 2 < lastPage) {
        elements.push(
          <div className={"pagination__gap"} key={"suffixGapPagination"}>
            ...
          </div>
        );
      }
    }
  });

  return <ul className={styles.pagination}>{elements}</ul>;
};
