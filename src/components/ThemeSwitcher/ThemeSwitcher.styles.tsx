import React from "react";
import styled from "styled-components";

const Radio = styled.input`
  appearance: none;
  width: 1em;
  height: 1em;
  cursor: pointer;
  display: block;

  &:checked ~ .icon {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Label = styled.label`
  position: relative;
  width: 1em;
  height: 1em;
`;

const Wrapper = styled.fieldset`
  position: relative;
  width: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  border: solid 1px ${(props) => props.theme.colors.text.accent};
  border-radius: 10px;
  padding: 4px 2px;
  overflow: visible;

  & .icon {
    z-index: 1000;
    pointer-events: none;
    display: block;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
    color: ${(props) => props.theme.colors.text.accent};
    transition: color 0.1s ease-in;
    &--status {
      left: 0;
      right: 0;
      z-index: 999;
      width: 1.4em;
      height: 1.4em;
      margin-top: -0.7em;
      transition: transform 0.2s ease-in;
    }
  }

  &.light {
    & .icon--status {
      transform: translateX(7%);
    }
  }

  &.dark {
    & .icon--status {
      transform: translateX(100%);
    }
  }
`;

export const Styles = {
  Wrapper: React.memo(Wrapper),
  Radio: React.memo(Radio),
  Label: React.memo(Label),
};
