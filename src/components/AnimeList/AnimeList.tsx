import React from "react";
import { AnimeListType } from "../../types/AnimeList.type";
import { AnimeCard } from "../AnimeCard/AnimeCard";

import * as S from "./AnimeList.styles";

interface Props {
  animeList: AnimeListType;
}

export const AnimeList = (props: Props) => {
  const { animeList } = props;
  return (
    <S.Wrapper>
      {animeList && animeList.media
        ? animeList.media.map((anime) => (
            <AnimeCard key={anime.idMal} anime={anime} />
          ))
        : null}
    </S.Wrapper>
  );
};
