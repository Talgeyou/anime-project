import React from "react";
import { NavLink } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

import * as S from "./SearchField.styles";

interface Props {
  search?: string | null;
}

export const SearchField = (props: Props) => {
  const { search } = props;
  const [newSearch, handleSearchChange] = useInput(search ? search : "");
  return (
    <S.Wrapper>
      <S.Input required value={newSearch} onChange={handleSearchChange} />
      <NavLink to={`/search?search=${newSearch}`}>
        <S.Button>Find</S.Button>
      </NavLink>
    </S.Wrapper>
  );
};
