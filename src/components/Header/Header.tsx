import { useCallback, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

import * as S from "./Header.styles";
import React from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

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
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Burger tabIndex={2} onClick={handleBurgerButtonClick}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.Burger>
        <NavLink tabIndex={1} to={"/"}>
          Anime Site
        </NavLink>
      </S.LogoWrapper>
      <Navigation isActive={isNavigationActive} />
      <ThemeSwitcher onChange={onThemeChange} currentTheme={currentTheme} />
    </S.Wrapper>
  );
});

Header.displayName = "MemoizedHeader";
