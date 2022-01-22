import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  padding: 1em;
  display: flex;
  gap: 20%;
`;

Wrapper.displayName = "HeaderWrapper";

export const LogoWrapper = styled.div`
  display: flex;
  gap: 1em;
  color: #5d5fef;
`;

LogoWrapper.displayName = "HeaderLogoWrapper";

export const Burger = styled.button`
  width: 20px;
  height: 20px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

Burger.displayName = "HeaderBurger";

export const BurgerLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #fafafa;
`;

BurgerLine.displayName = "HeaderBurgerLine";
