import { faCircle, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Styles as S } from "./ThemeSwitcher.styles";

type Props = {
  currentTheme: "light" | "dark";
  onChange?: (theme: "dark" | "light") => void;
};

export const ThemeSwitcher = (props: Props) => {
  const { currentTheme, onChange } = props;
  const [theme, setTheme] = useState(currentTheme as "dark" | "light");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (value === "dark" || value === "light") {
      setTheme(value);
      if (onChange) {
        onChange(value);
      }
    }
  };
  return (
    <S.Wrapper className={theme === "dark" ? "dark" : "light"}>
      <S.Label>
        <S.Radio
          type={"radio"}
          value={"light"}
          name={"theme"}
          checked={theme === "light"}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faSun} className={"icon icon--sun"} />
      </S.Label>

      <S.Label>
        <S.Radio
          type={"radio"}
          value={"dark"}
          name={"theme"}
          checked={theme === "dark"}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon={faMoon} className={"icon icon--moon"} />
      </S.Label>

      <FontAwesomeIcon icon={faCircle} className={"icon icon--status"} />
    </S.Wrapper>
  );
};
