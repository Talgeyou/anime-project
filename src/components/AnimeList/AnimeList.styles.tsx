import styled from "styled-components";

export const Wrapper = styled.ul`
  padding: 0 20px;
  list-style: none;
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

Wrapper.displayName = "AnimeListWrapper";
