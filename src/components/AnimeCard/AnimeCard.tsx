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
        <S.Image src={anime.coverImage.extraLarge} loading="lazy" />
      </S.ImageWrapper>
      <S.Meta>
        <S.Title>{anime.title.english}</S.Title>
        <S.Score>Score: {anime.averageScore / 10}/10</S.Score>
        <S.Format>Format: {anime.format}</S.Format>
        <S.GenreList>
          {anime.genres.map((genre) => (
            <S.Genre key={genre}>{genre}</S.Genre>
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
