import React, { useCallback } from "react";
import { useInput } from "../../hooks/useInput";

import styles from "../../styles/SearchField.module.scss";

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
    <section className={styles.search}>
      <input
        className={styles.search__input}
        placeholder={"Search anime by name..."}
        required
        value={newSearch}
        onChange={handleSearchChange}
        tabIndex={4}
        aria-label={"Search anime by search query"}
        aria-required={"true"}
        onKeyUp={handleEnterPush}
      />
    </section>
  );
});

SearchField.displayName = "SearchField";
