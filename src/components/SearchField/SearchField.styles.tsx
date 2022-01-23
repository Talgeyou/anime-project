import React from "react";
import styled from "styled-components";

export const Wrapper = React.memo(styled.div`
  width: 100%;
  display: flex;
  padding: 0 40px;
  color: ${(props) => props.theme.colors.text.main};
  background-color: ${(props) => props.theme.colors.background};
`);

Wrapper.displayName = "SearchFieldWrapper";

export const Input = React.memo(styled.input`
  flex: 1;
  border-radius: 10px;
  border: solid 1px #5d5fef;
  padding: 8px;
  color: #5d5fef;
`);

Input.displayName = "SearchFieldInput";
