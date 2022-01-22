import React from "react";
import { AnimeType } from "../../types/Anime.type";
import { AnimeCard } from "../AnimeCard/AnimeCard";

import * as S from "./HorizontalAnimeCardsList.styles";

type Props = { label?: string; animeList: AnimeType[] };

export const HorizontalAnimeCardsList = (props: Props) => {
  const { animeList, label } = props;
  return (
    <S.Wrapper>
      {label ? <S.Label>{label}</S.Label> : null}
      <S.Items>
        {animeList.map((anime: AnimeType) => (
          <AnimeCard key={anime.id} anime={anime}></AnimeCard>
        ))}
      </S.Items>
    </S.Wrapper>
  );
};
