import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  border: solid 1px #efdbea;
  padding: 1em;
`;

Wrapper.displayName = "SearchAnimeFormWrapper";

export const Field = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  overflow: hidden;
`;

Field.displayName = "SearchAnimeFormField";

export const Label = styled.label`
  flex: 0 0 50%;
  width: 50%;
`;

Label.displayName = "SearchAnimeFormLabel";

export const Select = styled.select`
  border: solid 1px #fafafa;
  padding: 0.25em 0.5em;
  flex: 0 0 calc(50% - 1.5em);
  width: calc(50% - 1.5em);
  color: #fafafa;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #efdbea;
  }
`;

Select.displayName = "SearchAnimeFormSelect";

export const Option = styled.option`
  background-color: #121212;
`;

Option.displayName = "SearchAnimeFormOption";

export const Input = styled.input`
  border: solid 1px #fafafa;
  padding: 0.25em 0.5em;
  flex: 0 0 calc(50% - 1.5em);
  width: calc(50% - 1.5em);
  color: #fafafa;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #efdbea;
  }
`;

Input.displayName = "SearchAnimeFormInput";

export const Button = styled.button`
  border: solid 1px #fafafa;
  padding: 0.25em 0.5em;
  flex: 0 0 calc(50% - 1.5em);
  width: calc(50% - 1.5em);
  color: #fafafa;
  transition: border-color 0.2s ease-out;

  &:focus {
    border-color: #efdbea;
  }
`;

Button.displayName = "SearchAnimeFormButton";
