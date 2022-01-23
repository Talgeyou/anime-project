import React from "react";
import { AnimeDetailsType } from "../../types/AnimeDetails.type";
import { HorizontalAnimeCardsList } from "../HorizontalAnimeCardsList/HorizontalAnimeCardsList";
import { HorizontalCharacterCardsList } from "../HorizontalCharacterCardsList/HorizontalCharacterCardsList";

import * as S from "./AnimeDetails.styles";

type Props = {
  anime: AnimeDetailsType;
};

export const AnimeDetails = (props: Props) => {
  const { anime } = props;
  return (
    <S.Wrapper>
      {anime.bannerImage ? (
        <S.ImageWrapper>
          <S.Image
            src={anime.bannerImage}
            alt={
              anime.title.english || anime.title.romaji || anime.title.native
            }
          />
        </S.ImageWrapper>
      ) : null}
      <S.Meta>
        <S.Title>
          {anime.title.english || anime.title.romaji || anime.title.native}
        </S.Title>
        <S.Description
          dangerouslySetInnerHTML={{ __html: anime.description }}
        ></S.Description>
        <S.Season>Season: {anime.season}</S.Season>
        <S.ReleaseYear>Year: {anime.seasonYear}</S.ReleaseYear>
        <S.Episodes>Episodes: {anime.episodes}</S.Episodes>
        <S.Duration>Duration: {anime.duration}</S.Duration>
        <S.Country>Country: {anime.countryOfOrigin}</S.Country>
        <S.Source>Source: {anime.source}</S.Source>
        <S.Genres>
          <S.GenresLabel>Genres:</S.GenresLabel>
          <S.GenresList>
            {anime.genres.map((genre: string) => (
              <S.Genre key={genre}>{genre}</S.Genre>
            ))}
          </S.GenresList>
        </S.Genres>
        <S.Score>Score: {anime.averageScore / 10}</S.Score>
        <S.IsAdult>ForAdult?: {anime.isAdult ? "Yes" : "No"}</S.IsAdult>
        <HorizontalCharacterCardsList
          label={"Characters"}
          characterList={anime.characters}
        />
        <HorizontalAnimeCardsList
          label={"Related"}
          animeList={anime.relations.edges
            .filter((edge) => edge.node.type === "ANIME")
            .map((edge) => {
              const anime = { ...edge.node };
              anime.relationType = edge.relationType;
              return anime;
            })}
        />
      </S.Meta>
    </S.Wrapper>
  );
};
