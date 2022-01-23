import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow: visible;
`;

Wrapper.displayName = "SliderWrapper";

export const Carousel = styled.ul`
  width: fit-content;
  list-style: none;
  display: flex;
  gap: 40px;
  cursor: grab;
  &.dragging {
    cursor: grabbing;
  }
`;

Carousel.displayName = "SliderCarousel";

export const Item = styled.li``;

Item.displayName = "SliderItem";
