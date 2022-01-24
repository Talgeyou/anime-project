import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

Wrapper.displayName = "PaginationWrapper";

export const NavigationButton = styled.button`
  background-color: ${(props) => props.theme.colors.text.accent};
  width: 3em;
  height: 3em;
  color: ${(props) => props.theme.colors.text.main};
  transition: background-color 0.2s ease-out;

  &.active,
  &:hover {
    background-color: ${(props) => props.theme.colors.text.main};
    color: ${(props) => props.theme.colors.background.main};
  }
`;

NavigationButton.displayName = "PaginationNavigationButton";

export const NavigationDots = styled.div`
  color: ${(props) => props.theme.colors.text.main};
`;

NavigationDots.displayName = "PaginationNavigationDots";
