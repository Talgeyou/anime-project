import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useCallback, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

import styles from "../../styles/Header.module.scss";

interface Props {
  currentTheme: "dark" | "light";
  onThemeChange?: (theme: "dark" | "light") => void;
}

export const Header = React.memo((props: Props) => {
  const { currentTheme, onThemeChange } = props;
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  const handleBurgerButtonClick = useCallback(() => {
    setIsNavigationActive(!isNavigationActive);
  }, [isNavigationActive]);

  return (
    <header className={styles.header}>
      <div className={styles["header-logo"]}>
        <button
          className={styles["header-burger"]}
          tabIndex={2}
          onClick={handleBurgerButtonClick}
        >
          <span className={styles["header-burger_line"]}></span>
          <span className={styles["header-burger_line"]}></span>
          <span className={styles["header-burger_line"]}></span>
        </button>
        <NavLink tabIndex={1} to={"/"}>
          Anime Site
        </NavLink>
      </div>
      <Navigation isActive={isNavigationActive} />
      <ThemeSwitcher onChange={onThemeChange} currentTheme={currentTheme} />
    </header>
  );
});

Header.displayName = "MemoizedHeader";
