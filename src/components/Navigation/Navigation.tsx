import { routes } from "../../routes";
import { useLocation, NavLink } from "react-router-dom";

import * as S from "./Navigation.styles";
import React from "react";

interface Props {
  isActive: boolean;
}

export const Navigation = React.memo((props: Props) => {
  const { isActive } = props;
  const location = useLocation();
  const { pathname } = location;
  return (
    <S.Wrapper className={isActive ? "active" : undefined}>
      <S.NavigationList>
        {routes
          .filter((route) => route.shouldDisplayInNavigation)
          .map((route) => (
            <S.NavigationItem
              key={route.name}
              className={pathname === route.path ? "active" : undefined}
            >
              <NavLink tabIndex={3} to={route.path}>
                {route.name}
              </NavLink>
            </S.NavigationItem>
          ))}
      </S.NavigationList>
    </S.Wrapper>
  );
});

Navigation.displayName = "MemoizedNavigation";
