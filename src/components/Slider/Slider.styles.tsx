import React from "react";
import styled from "styled-components";

export const Wrapper = React.memo(styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`);

Wrapper.displayName = "SliderWrapper";

export const Carousel = React.memo(styled.ul`
  width: fit-content;
  list-style: none;
  display: flex;
  gap: 40px;
  cursor: grab;
  &.dragging {
    cursor: grabbing;
  }
`);

Carousel.displayName = "SliderCarousel";

export const Item = React.memo(
  styled.li`
    display: flex;
    justify-content: center;
    width: 300px;
  `
);

Item.displayName = "SliderItem";

export const LeftArrow = React.memo(
  styled.button`
    z-index: 1000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -64px;

    & svg {
      border-radius: 10px;
      transform: rotateY(180deg);
      color: ${(props) => props.theme.colors.text.accent} !important;
      box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.shadow};
      background-color: ${(props) => props.theme.colors.background.transparent};
      width: 64px !important;
      height: 64px !important;
    }
  `
);

LeftArrow.displayName = "SliderLeftArrow";

export const RightArrow = React.memo(styled.button`

  z-index: 1000;
  width: 64px;
  height: 64px;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -64px;
  box-shadow: 0 0 5px 10px {props => props.theme.colors.shadow};

  & svg {
    border-radius: 10px;
    color: ${(props) => props.theme.colors.text.accent} !important;
    box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.shadow};
    background-color: ${(props) => props.theme.colors.background.transparent};
    width: 64px !important;
    height: 64px !important;
  }
`);

RightArrow.displayName = "SliderRightArrow";
