import React from "react";
import { CharacterType } from "../../types/Character.type";
import { CharacterListType } from "../../types/CharacterList.type";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { Slider } from "../Slider/Slider";

import styles from "../../styles/CardsList.module.scss";

type Props = { label?: string; characterList: CharacterListType };

export const HorizontalCharacterCardsList = (props: Props) => {
  const { characterList, label } = props;
  return (
    <section className={styles["cards-list--horizontal"]}>
      {label ? <h3 className={styles["cards-list__label"]}>{label}</h3> : null}
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
    </section>
  );
};
