import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useCallback, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

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
      <div className={styles.logo}>
        <button
          className={styles.burger}
          tabIndex={2}
          onClick={handleBurgerButtonClick}
        >
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
          <span className={styles.burger__line}></span>
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
