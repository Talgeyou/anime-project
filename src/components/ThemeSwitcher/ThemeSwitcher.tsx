import { faCircle, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import styles from "../../styles/ThemeSwitcher.module.scss";

type Props = {
  currentTheme: "light" | "dark" | "auto";
  onChange?: (theme: "dark" | "light" | "auto") => void;
};

export const ThemeSwitcher = (props: Props) => {
  const { currentTheme, onChange } = props;
  const [theme, setTheme] = useState(currentTheme as "dark" | "light" | "auto");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (value === "dark" || value === "light" || value === "auto") {
      setTheme(value);
      if (onChange) {
        onChange(value);
      }
    }
  };
  return (
    <fieldset
      className={
        theme === "dark"
          ? `${styles["theme-switcher"]} ${styles["theme-switcher--dark"]}`
          : theme === "light"
          ? `${styles["theme-switcher"]} ${styles["theme-switcher--light"]}`
          : `${styles["theme-switcher"]} ${styles["theme-switcher--auto"]}`
      }
    >
      <label className={styles["theme-switcher__label"]}>
        <input
          className={styles["theme-switcher__button"]}
          tabIndex={4}
          type={"radio"}
          value={"light"}
          name={"theme"}
          checked={theme === "light"}
          onChange={handleChange}
        />
        <FontAwesomeIcon
          icon={faSun}
          className={`${styles["theme-switcher__icon"]} ${styles["theme-switcher__icon--sun"]}`}
        />
      </label>

      <label className={styles["theme-switcher__label"]}>
        <input
          className={styles["theme-switcher__button"]}
          tabIndex={4}
          type={"radio"}
          value={"auto"}
          name={"theme"}
          checked={theme === "auto"}
          onChange={handleChange}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`${styles["theme-switcher__icon"]} ${styles["theme-switcher__icon--auto"]}`}
        />
      </label>

      <label className={styles["theme-switcher__label"]}>
        <input
          className={styles["theme-switcher__button"]}
          tabIndex={4}
          type={"radio"}
          value={"dark"}
          name={"theme"}
          checked={theme === "dark"}
          onChange={handleChange}
        />
        <FontAwesomeIcon
          icon={faMoon}
          className={`${styles["theme-switcher__icon"]} ${styles["theme-switcher__icon--moon"]}`}
        />
      </label>

      <FontAwesomeIcon
        icon={faCircle}
        className={`${styles["theme-switcher__icon"]} ${styles["theme-switcher__icon--status"]}`}
      />
    </fieldset>
  );
};
