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
  color: #5d5fef;
  &:hover,
  &.active {
    color: #212121;
  }

  @media (max-width: 768px) {
    color: #5d5fef;
    text-align: center;
    &:hover,
    &.active {
      color: #212121;
    }
  }
`;

NavigationItem.displayName = "NavigationItem";
