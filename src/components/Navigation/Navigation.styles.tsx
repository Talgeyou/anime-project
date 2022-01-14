import styled from "styled-components";

export const Wrapper = styled.nav`
  @media (max-width: 768px) {
    padding: 1em;
    width: 100%;
    height: calc(100vh - 3em);
    position: fixed;
    top: 3em;
    left: 0;
    transform: translateX(-100%);

    background-color: #fafafa;
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
  &.active {
    color: #efdbea;
  }

  @media (max-width: 768px) {
    color: #777777;
    text-align: center;
    &.active {
      color: #000000;
    }
  }
`;

NavigationItem.displayName = "NavigationItem";
