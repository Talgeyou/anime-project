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
    transform: translateY(-40px);
    cursor: pointer;
    ${ImageWrapper} {
      box-shadow: 0 0 10px #212121;
    }
    ${Title} {
      color: ${(props) => props.theme.colors.text.accent};
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
