import { URLSearchParamsInit } from "react-router-dom";
import { AnimeListType } from "../../types/AnimeList.type";
import { AnimeCard } from "../AnimeCard/AnimeCard";
import { Pagination } from "../Pagination/Pagination";

import * as S from "./AnimeList.styles";

interface Props {
  animeList: AnimeListType;
  pagination?: boolean;
  searchParams?: URLSearchParams;
  setSearchParams?: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined
  ) => void;
}

export const AnimeList = (props: Props) => {
  const { animeList, pagination, setSearchParams, searchParams } = props;
  return (
    <S.Wrapper>
      {pagination && setSearchParams && searchParams ? (
        <Pagination
          currentPage={animeList.pageInfo.currentPage}
          lastPage={animeList.pageInfo.lastPage}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      ) : null}
      <S.List>
        {animeList && animeList.media
          ? animeList.media.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))
          : null}
      </S.List>
      {pagination && setSearchParams && searchParams ? (
        <Pagination
          currentPage={animeList.pageInfo.currentPage}
          lastPage={animeList.pageInfo.lastPage}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      ) : null}
    </S.Wrapper>
  );
};
