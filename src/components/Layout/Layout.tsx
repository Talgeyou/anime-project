import React from "react";
import { Header } from "../Header/Header";

import * as S from "./Layout.styles";

interface Props {
  children?: React.ReactNode;
  search?: string | null;
  currentTheme: "dark" | "light";
  onThemeChange: (theme: "dark" | "light") => void;
}

export const Layout = React.memo((props: Props) => {
  const { children, search, currentTheme, onThemeChange } = props;
  return (
    <S.Wrapper>
      <Header onThemeChange={onThemeChange} currentTheme={currentTheme} />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
});

Layout.displayName = "Layout";
