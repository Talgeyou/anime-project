import { NavLink } from "react-router-dom";
import { AnimeType } from "../../types/Anime.type";

import * as S from "./AnimeCard.styles";

interface Props {
  anime: AnimeType;
}

export const AnimeCard = (props: Props) => {
  const { anime } = props;
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
        </S.ImageWrapper>
      ) : null}

      <NavLink to={`/anime/${anime.idMal}`}>
        <S.Title>
          {anime.title.english || anime.title.romaji || anime.title.native}
        </S.Title>
      </NavLink>
    </S.Wrapper>
  );
};
