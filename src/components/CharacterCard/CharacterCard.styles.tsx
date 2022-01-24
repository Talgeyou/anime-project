import styled from "styled-components";

export const ImageWrapper = styled.div`
  pointer-events: none;
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

export const Role = styled.div`
  width: 230px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  transition: color 0.3s ease-out;

  color: ${(props) => props.theme.colors.text.main};
`;

Role.displayName = "AnimeCardRole";

export const Name = styled.div``;

Name.displayName = "AnimeCardName";

export const Gender = styled.div``;

Gender.displayName = "AnimeCardGender";

export const Age = styled.div``;

Age.displayName = "AnimeCardAge";

export const Meta = styled.div`
  width: 230px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  transition: color 0.3s ease-out;

  color: ${(props) => props.theme.colors.text.main};
`;

Meta.displayName = "AnimeCardMeta";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s ease-out;
  width: 230px;
`;

Wrapper.displayName = "AnimeCardWrapper";

export const Image = styled.img`
  pointer-events: none;
  user-drag: none;
  user-select: none;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
`;

Image.displayName = "AnimeCardImage";
