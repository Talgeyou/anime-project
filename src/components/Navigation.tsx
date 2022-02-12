import React from "react";
import { routes } from "../routes";
import { useLocation, NavLink } from "react-router-dom";

import styles from "../styles/Navigation.module.scss";

interface Props {
    isActive: boolean;
}

export const Navigation = React.memo((props: Props) => {
    const { isActive } = props;
    const location = useLocation();
    const { pathname } = location;
    return (
        <nav className={isActive ? `${styles.navigation} ${styles.active}` : styles.navigation}>
            <ul className={styles["navigation__list"]} id={"navigation-menu"}>
                {routes
                    .filter((route) => route.shouldDisplayInNavigation)
                    .map((route) => (
                        <li
                            key={route.name}
                            className={
                                pathname === route.path
                                    ? `${styles["navigation__list-item"]} ${styles.active}`
                                    : styles["navigation__list-item"]
                            }
                        >
                            <NavLink tabIndex={3} to={route.path}>
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    );
});

Navigation.displayName = "MemoizedNavigation";
