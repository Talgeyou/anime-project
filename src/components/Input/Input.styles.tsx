import styled from "styled-components";

export const Wrapper = styled.div`
  color: #fafafa;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

Wrapper.displayName = "InputWrapper";

export const Input = styled.input`
  background-color: #fafafa;
  color: #121212;
  padding: 0.25em 0.5em;
  flex: 0 0 100%;
  width: 100%;
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: #efdbea;
  }
`;

Input.displayName = "InputInput";

export const Label = styled.label`
  flex: 0 0 50%;
  width: 50%;
  & + ${Input} {
    flex: 0 0 calc(50% - 1.5em);
    width: calc(50% - 1.5em);
  }
`;

Label.displayName = "InputLabel";
