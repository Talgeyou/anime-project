import { faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import styles from "../styles/Switcher.module.scss";

type Props = { value: string; onChange: React.ChangeEventHandler<HTMLInputElement> };

export const Switcher = (props: Props) => {
    const { value, onChange } = props;
    return (
        <fieldset className={styles.switcher}>
            <label
                className={styles.switcher__label}
                htmlFor="compact-view"
                aria-label="toggle compact view"
            >
                <input
                    id="compact-view"
                    className={styles.switcher__button}
                    type="radio"
                    name={"layout"}
                    value={"compact"}
                    checked={value === "compact"}
                    onChange={onChange}
                />
                <FontAwesomeIcon className={styles.switcher__icon} icon={faTh} />
            </label>
            <label
                className={styles.switcher__label}
                htmlFor="cozy-view"
                aria-label="toggle cozy view"
            >
                <input
                    id="cozy-view"
                    className={styles.switcher__button}
                    type="radio"
                    name={"layout"}
                    value={"cozy"}
                    checked={value === "cozy"}
                    onChange={onChange}
                />
                <FontAwesomeIcon className={styles.switcher__icon} icon={faThLarge} />
            </label>
        </fieldset>
    );
};
