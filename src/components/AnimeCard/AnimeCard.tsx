import React from "react";
import { NavLink } from "react-router-dom";
import { AnimeType } from "../../types/Anime.type";

import { Styles as S } from "./AnimeCard.styles";

interface Props {
  anime: AnimeType;
}

export const AnimeCard = React.memo((props: Props) => {
  const { anime } = props;
  const handleMouseDown = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
  };
  return (
    <S.Wrapper>
      {anime.relationType ? (
        <S.RelationType>{anime.relationType}</S.RelationType>
      ) : null}
      {anime.coverImage &&
      (anime.coverImage.extraLarge ||
        anime.coverImage.large ||
        anime.coverImage.medium) ? (
        <S.ImageWrapper>
          <S.Image
            src={anime.coverImage.extraLarge}
            srcSet={`${anime.coverImage.extraLarge} 1440w, ${anime.coverImage.large} 768w, ${anime.coverImage.medium} 425w`}
            alt={`${
              anime.title.english || anime.title.romaji || anime.title.native
            } banner`}
            loading="lazy"
          />
          <S.Meta>
            <S.Score>Score: {anime.averageScore / 10}/10</S.Score>
            <S.Format>Format: {anime.format}</S.Format>
            <S.Status>Status: {anime.status}</S.Status>
            <S.Episodes>Episodes: {anime.episodes}</S.Episodes>
            <S.Duration>Duration: {anime.duration}</S.Duration>
          </S.Meta>
        </S.ImageWrapper>
      ) : null}

      <NavLink to={`/anime/${anime.id}`} onMouseDown={handleMouseDown}>
        <S.Title>
          {anime.title.english || anime.title.romaji || anime.title.native}
        </S.Title>
      </NavLink>
    </S.Wrapper>
  );
});

AnimeCard.displayName = "AnimeCard";
