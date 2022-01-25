import React from "react";
import { Header } from "../Header/Header";

import styles from "./Layout.module.scss";

interface Props {
  children?: React.ReactNode;
  search?: string | null;
  currentTheme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}

export const Layout = React.memo((props: Props) => {
  const { children, search, currentTheme, onThemeChange } = props;
  return (
    <div className={styles.layout}>
      <Header onThemeChange={onThemeChange} currentTheme={currentTheme} />
      <main className={styles.content}>{children}</main>
    </div>
  );
});

Layout.displayName = "Layout";
