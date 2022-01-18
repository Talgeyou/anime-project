import React, { useCallback } from "react";
import { URLSearchParamsInit } from "react-router-dom";

import * as S from "./Pagination.styles";

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
          <S.NavigationDots key={"prefixGapPagination"}>...</S.NavigationDots>
        );
      }
      elements.push(
        <S.NavigationButton
          className={currentPage === number ? "active" : undefined}
          key={number}
          data-id={number}
          onClick={handleChangePageButtonClick}
        >
          {number}
        </S.NavigationButton>
      );
      if (number === currentPage + 1 && number + 2 < lastPage) {
        elements.push(
          <S.NavigationDots key={"suffixGapPagination"}>...</S.NavigationDots>
        );
      }
    }
  });

  return <S.Wrapper>{elements}</S.Wrapper>;
};
