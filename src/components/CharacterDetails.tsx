import React from "react";
import styles from "../styles/Details.module.scss";
import { CharacterDetailsType } from "../types/CharacterDetails.type";
import { Typography } from "./Typography";

type Props = {
    character: CharacterDetailsType;
};

export const CharacterDetails = (props: Props) => {
    const { character } = props;
    return (
        <article className={styles["details"]}>
            <div className={styles["details__meta"]}>
                <img className={styles["details__image"]} src={character.image?.large} alt={""} />
                <Typography variant={"h1"}>{character.name.full}</Typography>
                <Typography
                    variant={"body"}
                    dangerouslySetInnerHTML={{ __html: character.description }}
                />
                <Typography variant={"body"}>
                    <span className={styles["details-meta__label"]}>Age: </span>
                    {character.age}
                </Typography>
                <Typography variant={"body"}>
                    <span className={styles["details-meta__label"]}>Gender: </span>
                    {character.gender}
                </Typography>
                {character.bloodType ? (
                    <Typography variant={"body"}>
                        <span className={styles["details-meta__label"]}>BloodType: </span>
                        {character.bloodType}
                    </Typography>
                ) : null}
            </div>
        </article>
    );
};
