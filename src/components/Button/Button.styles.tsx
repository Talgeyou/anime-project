import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.25em;
  color: #fafafa;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  overflow: hidden;
`;

Wrapper.displayName = "ButtonWrapper";

export const Button = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text.accent};
  border: solid 1px ${(props) => props.theme.colors.text.accent};
  border-radius: 10px;
  padding: 0.25em 0.5em;
  transition: background-color 0.2s ease-out;

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colors.text.accent};
    color: ${(props) => props.theme.colors.background};
  }
`;

Button.displayName = `ButtonButton`;
