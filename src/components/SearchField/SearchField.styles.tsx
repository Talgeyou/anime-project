import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

Wrapper.displayName = "SearchFieldWrapper";

export const Button = styled.button`
  border: solid 1px #fafafa;
  padding: 0.25em 0.5em;
  color: #fafafa;
  transition: border-color 0.2s ease-out, transform 0.2s ease-out;
  transform: translateY(-180%);

  &:focus {
    border-color: #efdbea;
  }
`;

Button.displayName = "SearchFieldButton";

export const Input = styled.input`
  border: solid 1px #fafafa;
  padding: 0.25em 0.5em;
  background-color: #fafafa;
  color: #121212;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #efdbea;

    &:valid ~ a > ${Button} {
      transform: translateY(0);
      display: block;
    }
  }
`;

Input.displayName = "SearchFieldInput";
