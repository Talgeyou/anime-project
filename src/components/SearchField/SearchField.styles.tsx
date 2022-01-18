import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
  display: flex;
  align-items: center;
`;

Wrapper.displayName = "SearchFieldWrapper";

export const Button = styled.a`
  padding: 0.25em 0.5em;
  color: #121212;
  transition: border-color 0.2s ease-out, transform 0.2s ease-out,
    color 0.2s ease-out;
`;

Button.displayName = "SearchFieldButton";

export const Input = styled.input`
  border: solid 1px #fafafa;
  padding: 0.25em 0.5em;
  color: #121212;
`;

Input.displayName = "SearchFieldInput";
