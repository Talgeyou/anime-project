import styled from "styled-components";

export const Wrapper = styled.nav`
  @media (max-width: 768px) {
    z-index: 1000;
    padding: 1em;
    width: 100%;
    height: calc(100vh - 3em);
    position: fixed;
    top: 3em;
    left: 0;
    transform: translateX(-100%);

    background-color: ${(props) => props.theme.colors.background};
    &.active {
      transition: transform 0.3s ease-out;
      display: block;
      transform: translateX(0);
    }
  }
`;

Wrapper.displayName = "NavigationWrapper";

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

NavigationList.displayName = "NavigationList";

export const NavigationItem = styled.li`
  color: ${(props) => props.theme.colors.text.accent};
  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.text.main};
  }

  @media (max-width: 768px) {
    color: ${(props) => props.theme.colors.text.accent};
    text-align: center;
    &:hover,
    &.active {
      color: ${(props) => props.theme.colors.text.main};
    }
  }
`;

NavigationItem.displayName = "NavigationItem";
