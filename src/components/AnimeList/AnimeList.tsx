import { AnimeCard } from "../AnimeCard/AnimeCard";
import { AnimeListType } from "../../types/AnimeList.type";
import { Pagination } from "../Pagination/Pagination";
import { URLSearchParamsInit } from "react-router-dom";

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
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      ) : null}
      <S.List>
        {animeList && animeList.media
          ? animeList.media.map((anime) => (
              <S.Item key={anime.id}>
                <AnimeCard anime={anime} />
              </S.Item>
            ))
          : null}
      </S.List>
      {pagination && setSearchParams && searchParams ? (
        <Pagination
          currentPage={animeList.pageInfo.currentPage}
          lastPage={animeList.pageInfo.lastPage}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      ) : null}
    </S.Wrapper>
  );
};
