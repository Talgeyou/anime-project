import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: visible;

  max-width: 100%;
`;

Wrapper.displayName = "HorizontalCardsListWrapper";

export const Items = styled.div`
  display: flex;
  gap: 40px;
`;

Items.displayName = "HorizontalCardsListItems";

export const Label = styled.h3`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.02em;

  color: #5d5fef;
`;

Label.displayName = "HorizontalCardsListLabel";