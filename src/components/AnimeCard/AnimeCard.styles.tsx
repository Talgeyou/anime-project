import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  width: 400px;
  height: 300px;
  overflow: hidden;
  padding-right: 1em;

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 425px) {
    padding: 0;
    gap: 0;
    width: 300px;
    flex-direction: column;
    align-items: center;
    overflow: visible;
    height: auto;
  }

  @media (max-width: 375px) {
    width: 250px;
  }
`;

Wrapper.displayName = "AnimeCardWrapper";

export const ImageWrapper = styled.div`
  flex: 0 0 50%;
  width: 50%;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  @media (max-width: 425px) {
    height: auto;
    overflow: visible;
    width: 100%;
    flex: 0 0 100%;
  }
`;

ImageWrapper.displayName = "AnimeCardImageWrapper";

export const Image = styled.img`
  width: auto;
  height: 300px;

  @media (max-width: 425px) {
    height: auto;
    width: 100%;
  }
`;

Image.displayName = "AnimeCardImage";

export const Meta = styled.div`
  overflow-y: auto;
  padding: 0.5em 0;
  flex: 0 0 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #efdbea;
  }

  @media (max-width: 425px) {
    width: 100%;
    flex: 0 0 100%;
    padding: 1em;
  }
`;

Meta.displayName = "AnimeCardMeta";

export const Title = styled.h3`
  font-size: 20px;
  color: #efdbea;
`;

Title.displayName = "AnimeCardTitle";

export const Score = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

Score.displayName = "AnimeCardScore";

export const Format = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

Format.displayName = "AnimeCardFormat";

export const GenreList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

GenreList.displayName = "AnimeCardGenreList";

export const Genre = styled.div`
  font-size: 14px;
`;

Genre.displayName = "AnimeCardGenre";

export const Description = styled.p``;

Description.displayName = "AnimeCardDescription";
