import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

Wrapper.displayName = "AnimeDetailsWrapper";

export const ImageWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
`;

ImageWrapper.displayName = "AnimeDetailsImageWrapper";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

Image.displayName = "AnimeDetailsImage";

export const Meta = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.02em;

  color: ${(props) => props.theme.colors.text.main};
`;

Meta.displayName = "AnimeDetailsMeta";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  letter-spacing: -0.02em;

  color: ${(props) => props.theme.colors.text.accent};
`;

Title.displayName = "AnimeDetailsTitle";

export const Description = styled.p``;

Description.displayName = "AnimeDetailsDescription";

export const Season = styled.div``;

Season.displayName = "AnimeDetailsSeason";

export const ReleaseYear = styled.div``;

ReleaseYear.displayName = "AnimeDetailsReleaseYear";

export const Episodes = styled.div``;

Episodes.displayName = "AnimeDetailsEpisodes";

export const Duration = styled.div``;

Duration.displayName = "AnimeDetailsDuration";

export const Country = styled.div``;

Country.displayName = "AnimeDetailsCountry";

export const Source = styled.div``;

Source.displayName = "AnimeDetailsSource";

export const Genres = styled.div`
  display: flex;
  gap: 0.5em;
`;

Genres.displayName = "AnimeDetailsGenres";

export const GenresLabel = styled.span`
  display: inline-block;
`;

GenresLabel.displayName = "AnimeDetailsGenresLabel";

export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5em;
`;

GenresList.displayName = "AnimeDetailsGenresList";

export const Genre = styled.li``;

Genre.displayName = "AnimeDetailsGenre";

export const Score = styled.div``;

Score.displayName = "AnimeDetailsScore";

export const IsAdult = styled.div``;

IsAdult.displayName = "AnimeDetailsIsAdult";
