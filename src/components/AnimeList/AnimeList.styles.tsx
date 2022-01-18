import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

Wrapper.displayName = "AnimeListWrapper";

export const List = styled.ul`
  width: 100%;
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

List.displayName = "AnimeListList";
