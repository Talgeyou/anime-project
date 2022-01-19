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
  background-color: #fafafa;
  width: 3em;
  height: 3em;
  color: #030303;
  transition: background-color 0.2s ease-out;

  &.active,
  &:hover {
    background-color: #efdbea;
  }
`;

NavigationButton.displayName = "PaginationNavigationButton";

export const NavigationDots = styled.div`
  color: #efdbea;
`;

NavigationDots.displayName = "PaginationNavigationDots";
