import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/Button.module.scss";

type Props = {
    type?: "link" | "button";
    href?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    tabIndex?: number;
    fluid?: boolean;
};

export const Button = (props: Props) => {
    const { type, href, children, onClick, tabIndex, fluid } = props;
    if (type === "link" && href) {
        return (
            <NavLink
                className={styles.button}
                style={{ width: fluid ? "100%" : undefined }}
                to={href}
                tabIndex={tabIndex}
            >
                {children}
            </NavLink>
        );
    }
    return (
        <button
            className={styles.button}
            onClick={onClick}
            tabIndex={tabIndex}
            style={{ width: fluid ? "100%" : undefined }}
        >
            {children}
        </button>
    );
};
