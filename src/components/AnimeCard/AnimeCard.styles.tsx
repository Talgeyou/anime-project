import styled from "styled-components";

export const ImageWrapper = styled.div`
  margin: 10px;
  border-radius: 10px;
  width: 230px;
  height: 325px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 5px #212121;
  transition: box-shadow 0.3s ease-out;
`;

ImageWrapper.displayName = "AnimeCardImageWrapper";

export const RelationType = styled.div`
  width: 230px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  transition: color 0.3s ease-out;

  color: ${(props) => props.theme.colors.text.main};
`;

RelationType.displayName = "AnimeCardRelationType";

export const Title = styled.h4`
  width: 230px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  transition: color 0.3s ease-out;

  color: ${(props) => props.theme.colors.text.main};
`;

Title.displayName = "AnimeCardTitle";

export const Meta = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  padding: 1em;
  transform: translateY(100%);
  box-shadow: none;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
`;

Meta.displayName = "AnimeCardMeta";

export const Score = styled.div``;

Score.displayName = "AnimeCardScore";

export const Format = styled.div``;

Format.displayName = "AnimeCardFormat";

export const Status = styled.div``;

Status.displayName = "AnimeCardStatus";

export const Episodes = styled.div``;

Episodes.displayName = "AnimeCardEpisodes";

export const Duration = styled.div``;

Duration.displayName = "AnimeCardDuration";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.3s ease-out;
  & a {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    cursor: pointer;
    ${ImageWrapper} {
      box-shadow: 0 0 10px #212121;
    }
    ${Title} {
      color: ${(props) => props.theme.colors.text.accent};
    }

    ${Meta} {
      box-shadow: 0 0 10px #212121;
      transform: translateY(0);
    }
  }
`;

Wrapper.displayName = "AnimeCardWrapper";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
`;

Image.displayName = "AnimeCardImage";
