import React from "react";
import { CharacterType } from "../../types/Character.type";

import styles from "./CharacterCard.module.scss";

type Props = { label: string; character: CharacterType };

export const CharacterCard = (props: Props) => {
  const { label, character } = props;
  return (
    <article className={styles["card--character"]}>
      {label ? <h4 className={styles["card__label"]}>{label}</h4> : null}
      <div className={styles["card-image"]}>
        <img
          className={styles["card-image__picture"]}
          src={character.image.large}
          srcSet={`${character.image.large} 768w, ${character.image.medium} 425w`}
          alt={`${character.name.full} banner`}
          loading="lazy"
        />
      </div>

      <div className={styles["card-meta"]}>
        <p className={styles["card-meta__text"]}>{character.name.full}</p>
        <p className={styles["card-meta__text"]}>Gender: {character.gender}</p>
        <p className={styles["card-meta__text"]}>
          Age: {character.age ? character.age : "Unknown"}
        </p>
      </div>
    </article>
  );
};
