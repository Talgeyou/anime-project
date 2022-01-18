import { AnimeType } from "../../types/Anime.type";

import * as S from "./AnimeCard.styles";

interface Props {
  anime: AnimeType;
}

export const AnimeCard = (props: Props) => {
  const { anime } = props;
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <S.Image
          src={anime.coverImage.extraLarge}
          srcSet={`${anime.coverImage.extraLarge} 1440w, ${anime.coverImage.large} 1024w, ${anime.coverImage.medium} 768w`}
          alt={`${
            anime.title.english || anime.title.romaji || anime.title.native
          } banner`}
          loading="lazy"
        />
      </S.ImageWrapper>
      <S.Meta>
        <S.Title>
          {anime.title.english || anime.title.romaji || anime.title.native}
        </S.Title>
        <S.Score>Score: {anime.averageScore / 10}/10</S.Score>
        <S.Format>Format: {anime.format}</S.Format>
        <S.GenreList>
          {anime.genres.map((genre) => (
            <S.Genre key={`${anime.id}-${genre}`}>{genre}</S.Genre>
          ))}
        </S.GenreList>
        <S.Description
          dangerouslySetInnerHTML={{
            __html: anime.description,
          }}
        ></S.Description>
      </S.Meta>
    </S.Wrapper>
  );
};
