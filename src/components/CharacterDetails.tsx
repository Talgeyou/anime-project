import React from "react";
import styles from "../styles/Details.module.scss";
import { CharacterDetailsType } from "../types/CharacterDetails.type";

type Props = {
    character: CharacterDetailsType;
};

export const CharacterDetails = (props: Props) => {
    const { character } = props;
    return (
        <article className={styles["details"]}>
            <div className={styles["details-meta"]}>
                <img className={styles["details__image"]} src={character.image?.large} alt={""} />
                <h1 className={styles["details-meta__title"]}>{character.name.full}</h1>
                <p
                    className={styles["details-meta__text"]}
                    dangerouslySetInnerHTML={{ __html: character.description }}
                />
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Age: </span>
                    {character.age}
                </p>
                <p className={styles["details-meta__text"]}>
                    <span className={styles["details-meta__label"]}>Gender: </span>
                    {character.gender}
                </p>
                {character.bloodType ? (
                    <p className={styles["details-meta__text"]}>
                        <span className={styles["details-meta__label"]}>BloodType: </span>
                        {character.bloodType}
                    </p>
                ) : null}
            </div>
        </article>
    );
};
