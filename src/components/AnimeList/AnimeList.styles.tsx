import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

Wrapper.displayName = "AnimeListWrapper";

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

List.displayName = "AnimeListList";

export const Item = styled.li``;

Item.displayName = "AnimeListItem";
