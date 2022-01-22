import React from "react";
import { CharacterType } from "../../types/Character.type";

import * as S from "./CharacterCard.styles";

type Props = { label: string; character: CharacterType };

export const CharacterCard = (props: Props) => {
  const { label, character } = props;
  return (
    <S.Wrapper>
      {label ? <S.Role>{label}</S.Role> : null}
      <S.ImageWrapper>
        <S.Image
          src={character.image.large}
          srcSet={`${character.image.large} 768w, ${character.image.medium} 425w`}
          alt={`${character.name.full} banner`}
          loading="lazy"
        />
      </S.ImageWrapper>

      <S.Meta>
        <S.Name>{character.name.full}</S.Name>
        <S.Gender>Gender: {character.gender}</S.Gender>
        <S.Age>Age: {character.age ? character.age : "Unknown"}</S.Age>
      </S.Meta>
    </S.Wrapper>
  );
};
