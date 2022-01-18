import { useCallback, useState } from "react";
import { Navigation } from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

import * as S from "./Header.styles";
import { SearchField } from "../SearchField/SearchField";

interface Props {
  search?: string | null;
}

export const Header = (props: Props) => {
  const { search } = props;
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
      <SearchField search={search} />
    </S.Wrapper>
  );
};
