import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.text.main};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

Wrapper.displayName = "SelectWrapper";

export const Select = styled.select`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text.main};
  border: solid 1px ${(props) => props.theme.colors.text.accent};
  border-radius: 10px;
  padding: 0.25em 0.5em;
  flex: 0 0 100%;
  width: 100%;
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: ${(props) => props.theme.colors.text.accent};
    color: #fafafa;
  }
`;

Select.displayName = "SelectSelect";

export const Option = styled.option`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text.main};
`;

Option.displayName = "SelectOption";

export const Label = styled.label`
  text-align: center;
  color: ${(props) => props.theme.colors.text.accent};
  flex: 0 0 20%;
  width: 20%;
  & + ${Select} {
    flex: 0 0 calc(80% - 1.5em);
    width: calc(80% - 1.5em);
  }
`;

Label.displayName = "SelectLabel";
