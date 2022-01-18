import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

import * as S from "./SearchField.styles";
import React, { useCallback } from "react";

interface Props {
  search?: string | null;
}

export const SearchField = (props: Props) => {
  const { search } = props;
  const [newSearch, handleSearchChange] = useInput(search ? search : "");

  const navigateToResult = useCallback(() => {
    window.location.href = `/search?search=${newSearch}`;
  }, [newSearch]);

  const handleEnterPush = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        navigateToResult();
      }
    },
    [navigateToResult]
  );
  return (
    <S.Wrapper>
      <S.Input
        required
        value={newSearch}
        onChange={handleSearchChange}
        tabIndex={4}
        aria-label={"Search anime by search query"}
        aria-required={"true"}
        onKeyUp={handleEnterPush}
      />

      <S.Button tabIndex={4} onClick={navigateToResult}>
        <FontAwesomeIcon icon={faSearch} />
      </S.Button>
    </S.Wrapper>
  );
};
