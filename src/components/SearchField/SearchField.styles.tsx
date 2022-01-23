import React from "react";
import styled from "styled-components";

export const Wrapper = React.memo(styled.div`
  width: 100%;
  display: flex;
  padding: 0 40px;
`);

Wrapper.displayName = "SearchFieldWrapper";

export const Button = React.memo(styled.a`
  padding: 8px;
  color: #121212;
  transition: border-color 0.2s ease-out, transform 0.2s ease-out,
    color 0.2s ease-out;
`);

Button.displayName = "SearchFieldButton";

export const Input = React.memo(styled.input`
  flex: 1;
  border-radius: 10px;
  border: solid 1px #5d5fef;
  padding: 8px;
  color: #5d5fef;
`);

Input.displayName = "SearchFieldInput";
