import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInput } from "../../hooks/useInput";

import * as S from "./SearchField.styles";
import React, { useCallback } from "react";

interface Props {
  search?: string | null;
}

export const SearchField = React.memo((props: Props) => {
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
        placeholder={"Search anime by name..."}
        required
        value={newSearch}
        onChange={handleSearchChange}
        tabIndex={4}
        aria-label={"Search anime by search query"}
        aria-required={"true"}
        onKeyUp={handleEnterPush}
      />
    </S.Wrapper>
  );
});

SearchField.displayName = "SearchField";
