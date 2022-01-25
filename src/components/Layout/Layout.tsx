import React from "react";
import { Header } from "../Header/Header";

import styles from "../../styles/Layout.module.scss";

interface Props {
  children?: React.ReactNode;
  currentTheme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}

export const Layout = React.memo((props: Props) => {
  const { children, currentTheme, onThemeChange } = props;
  return (
    <div className={styles.page}>
      <Header onThemeChange={onThemeChange} currentTheme={currentTheme} />
      <main className={styles["page-content"]}>{children}</main>
    </div>
  );
});

Layout.displayName = "Layout";
