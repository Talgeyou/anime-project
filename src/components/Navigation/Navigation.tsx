import { routes } from "../../routes";
import { useLocation, NavLink } from "react-router-dom";

import * as S from "./Navigation.styles";

interface Props {
  isActive: boolean;
}

export const Navigation = (props: Props) => {
  const { isActive } = props;
  const location = useLocation();
  const { pathname } = location;
  return (
    <S.Wrapper className={isActive ? "active" : undefined}>
      <S.NavigationList>
        {routes
          .filter((route) => route.path !== "/")
          .map((route) => (
            <S.NavigationItem
              key={route.name}
              className={pathname === route.path ? "active" : undefined}
            >
              <NavLink to={route.path}>{route.name}</NavLink>
            </S.NavigationItem>
          ))}
      </S.NavigationList>
    </S.Wrapper>
  );
};
