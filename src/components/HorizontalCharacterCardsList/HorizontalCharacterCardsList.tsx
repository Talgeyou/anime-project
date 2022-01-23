import React from "react";
import { CharacterType } from "../../types/Character.type";
import { CharacterListType } from "../../types/CharacterList.type";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { Slider } from "../Slider/Slider";

import * as S from "./HorizontalCharacterCardsList.styles";

type Props = { label?: string; characterList: CharacterListType };

export const HorizontalCharacterCardsList = (props: Props) => {
  const { characterList, label } = props;
  return (
    <S.Wrapper>
      {label ? <S.Label>{label}</S.Label> : null}
      {/* <S.Items>
        {characterList.edges.map(
          (character: { id: number; role: string; node: CharacterType }) => (
            <CharacterCard
              key={character.id}
              label={character.role}
              character={character.node}
            />
          )
        )}
      </S.Items> */}
      <Slider
        items={characterList.edges.map(
          (character: { id: number; role: string; node: CharacterType }) => (
            <CharacterCard
              key={character.id}
              label={character.role}
              character={character.node}
            />
          )
        )}
      />
    </S.Wrapper>
  );
};
