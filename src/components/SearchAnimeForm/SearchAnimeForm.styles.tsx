import styled from "styled-components";

export const Wrapper = styled.form`
  color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

Wrapper.displayName = "SearchAnimeFormWrapper";

export const Field = styled.div`
  color: #fafafa;
  padding: 0.25em;
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
  background-color: #fafafa;
  color: #121212;
  padding: 0.25em 0.5em;
  flex: 0 0 calc(50% - 1.5em);
  width: calc(50% - 1.5em);
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: #efdbea;
  }
`;

Select.displayName = "SearchAnimeFormSelect";

export const Option = styled.option`
  background-color: #fafafa;
`;

Option.displayName = "SearchAnimeFormOption";

export const Input = styled.input`
  background-color: #fafafa;
  color: #121212;
  padding: 0.25em 0.5em;
  flex: 0 0 calc(50% - 1.5em);
  width: calc(50% - 1.5em);
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: #efdbea;
  }
`;

Input.displayName = "SearchAnimeFormInput";

export const Button = styled.button`
  flex: 0 0 100%;
  width: 100%;
  background-color: #fafafa;
  color: #121212;
  padding: 0.25em 0.5em;
  width: calc(50% - 1.5em);
  transition: background-color 0.2s ease-out;

  &:focus {
    background-color: #efdbea;
  }
`;

Button.displayName = "SearchAnimeFormButton";
