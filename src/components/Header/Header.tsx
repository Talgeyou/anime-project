import React, { useCallback, useState } from "react";
import { routes } from "../../routes";
import { Navigation } from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

import * as S from "./Header.styles";

interface Props {}

export const Header = (props: Props) => {
  const [isNavigationActive, setIsNavigationActive] = useState(false);

  const handleBurgerButtonClick = useCallback(() => {
    setIsNavigationActive(!isNavigationActive);
  }, [isNavigationActive]);

  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Burger onClick={handleBurgerButtonClick}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.Burger>
        <NavLink to={"/"}>Anime Site</NavLink>
      </S.LogoWrapper>
      <Navigation isActive={isNavigationActive} />
    </S.Wrapper>
  );
};
