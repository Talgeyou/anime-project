import React from "react";
import { CharacterType } from "../../types/Character.type";

import styles from "../../styles/Card.module.scss";

type Props = { label: string; character: CharacterType };

export const CharacterCard = (props: Props) => {
  const { label, character } = props;
  return (
    <article className={styles["card"]}>
      {label ? <h4 className={styles["card__label"]}>{label}</h4> : null}
      <div className={styles["card-image"]}>
        <img
          className={styles["card-image__picture"]}
          src={character.image.large}
          srcSet={`${character.image.large} 768w, ${character.image.medium} 425w`}
          alt={`${character.name.full} banner`}
          loading="lazy"
        />
        <div className={styles["card-meta"]}>
          <p className={styles["card-meta__text"]}>
            Gender: {character.gender ? character.gender : "Unknown"}
          </p>
          <p className={styles["card-meta__text"]}>
            Age: {character.age ? character.age : "Unknown"}
          </p>
        </div>
      </div>
      <h4 className={styles["card__title"]}>{character.name.full}</h4>
    </article>
  );
};
