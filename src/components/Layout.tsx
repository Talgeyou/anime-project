import React from "react";
import { Header } from "./Header";

import styles from "../styles/Layout.module.scss";
import { ThemeType } from "../types/Theme.type";

interface Props {
    children?: React.ReactNode;
    currentTheme: ThemeType;
    onThemeChange: (theme: ThemeType) => void;
}

export const Layout = React.memo((props: Props) => {
    const { children, currentTheme, onThemeChange } = props;
    return (
        <div className={styles.page}>
            <Header onThemeChange={onThemeChange} currentTheme={currentTheme} />
            <main className={styles["page__content"]} role={"main"}>
                {children}
            </main>
        </div>
    );
});

Layout.displayName = "Layout";
