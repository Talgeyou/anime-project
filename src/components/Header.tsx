import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useCallback, useState } from "react";
import { Navigation } from "./Navigation";
import { NavLink } from "react-router-dom";

import styles from "../styles/Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ThemeType } from "../types/Theme.type";

interface Props {
    currentTheme: ThemeType;
    onThemeChange?: (theme: ThemeType) => void;
}

export const Header = React.memo((props: Props) => {
    const { currentTheme, onThemeChange } = props;
    const [isNavigationActive, setIsNavigationActive] = useState(false);

    const handleBurgerButtonClick = useCallback(() => {
        setIsNavigationActive(!isNavigationActive);
    }, [isNavigationActive]);

    return (
        <header className={styles.header} role={"banner"}>
            <div className={styles["header-logo"]}>
                <button
                    className={
                        isNavigationActive
                            ? `${styles["header-burger"]} ${styles["header-burger--active"]}`
                            : styles["header-burger"]
                    }
                    tabIndex={2}
                    onClick={handleBurgerButtonClick}
                    aria-expanded={isNavigationActive}
                    aria-controls={"navigation-menu"}
                >
                    <FontAwesomeIcon
                        aria-label={"Close Navigation Menu"}
                        aria-hidden={true}
                        className={`${styles["header-burger__icon"]} ${styles["header-burger__icon--close"]}`}
                        icon={faTimes as IconDefinition}
                    />
                    <FontAwesomeIcon
                        aria-label={"Open Navigation Menu"}
                        aria-hidden={true}
                        className={`${styles["header-burger__icon"]} ${styles["header-burger__icon--open"]}`}
                        icon={faBars as IconDefinition}
                    />
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
