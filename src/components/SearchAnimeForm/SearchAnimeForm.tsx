import React, { useCallback } from "react";
import { URLSearchParamsInit } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

import styles from "../../styles/Form.module.scss";

interface Props {
  searchParams: URLSearchParams;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined
  ) => void;
}

export const SearchAnimeForm = (props: Props) => {
  const { searchParams, setSearchParams } = props;
  const oldFormat = searchParams.get("format");
  const oldStatus = searchParams.get("status");
  const oldEpisodes = searchParams.get("episodes");
  const oldReleaseYear = searchParams.get("releaseYear");
  const oldIsAdult = searchParams.get("isAdult");
  const oldSort = searchParams.get("sort");
  const [format, handleFormatChange] = useInput(oldFormat ? oldFormat : "TV");
  const [status, handleStatusChange] = useInput(
    oldStatus ? oldStatus : "FINISHED"
  );
  const [episodes, handleEpisodesChange] = useInput(
    oldEpisodes && +oldEpisodes > 0 ? +oldEpisodes : ""
  );
  const [releaseYear, handleReleaseYearChange] = useInput(
    oldReleaseYear ? oldReleaseYear : ""
  );
  const [isAdult, handleIsAdultChange] = useInput(
    oldIsAdult !== null ? oldIsAdult : undefined
  );
  const [sort, handleSortChange] = useInput(
    oldSort ? oldSort : "START_DATE_DESC"
  );
  const handleSubmitButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const newSearchParams = new URLSearchParams();
      if (format) {
        newSearchParams.set("format", format.toString());
      }
      if (status) {
        newSearchParams.set("status", status.toString());
      }
      if (episodes) {
        newSearchParams.set("episodes", episodes.toString());
      }
      if (releaseYear) {
        newSearchParams.set("releaseYear", releaseYear.toString());
      }
      if (isAdult) {
        newSearchParams.set("isAdult", isAdult.toString());
      }
      if (sort) {
        newSearchParams.set("sort", sort.toString());
      }
      setSearchParams(newSearchParams);
    },
    [episodes, format, isAdult, releaseYear, setSearchParams, sort, status]
  );
  return (
    <form className={styles["form"]}>
      <Select
        tabIndex={5}
        id={"format"}
        initialValue={format}
        label={"Format"}
        onChange={handleFormatChange}
        options={[
          { label: "TV", value: "TV" },
          { label: "Short", value: "SHORT" },
          { label: "Special", value: "SPECIAL" },
          { label: "OVA", value: "OVA" },
          { label: "ONA", value: "ONA" },
          { label: "Music", value: "MUSIC" },
        ]}
      />
      <Select
        tabIndex={5}
        id={"status"}
        initialValue={status}
        label={"Status"}
        onChange={handleStatusChange}
        options={[
          { label: "Finished", value: "FINISHED" },
          { label: "Ongoing", value: "RELEASING" },
          { label: "Announced", value: "NOT_YET_RELEASED" },
          { label: "Cancelled", value: "CANCELLED" },
          { label: "On Hold", value: "HIATUS" },
        ]}
      />
      <Input
        tabIndex={5}
        id={"episodes"}
        initialValue={episodes}
        number={true}
        label={"Episodes"}
        onChange={handleEpisodesChange}
      />
      <Input
        tabIndex={5}
        id={"release-year"}
        initialValue={releaseYear}
        number={true}
        label={"Release Year"}
        onChange={handleReleaseYearChange}
      />
      <Select
        tabIndex={5}
        id={"is-adult"}
        initialValue={isAdult}
        label={"For Adult?"}
        onChange={handleIsAdultChange}
        options={[
          { label: "Any", value: undefined },
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ]}
      />
      <Select
        tabIndex={5}
        id={"sort"}
        initialValue={sort}
        label={"Sort"}
        onChange={handleSortChange}
        options={[
          { label: "Score Descending", value: "SCORE_DESC" },
          { label: "Score Ascending", value: "SCORE" },
          { label: "Popularity Descending", value: "POPULARITY_DESC" },
          { label: "Popularity Ascending", value: "POPULARITY" },
          { label: "Trending Descending", value: "TRENDING_DESC" },
          { label: "Trending Ascending", value: "TRENDING" },
          { label: "Release Date Descending", value: "START_DATE_DESC" },
          { label: "Release Date Ascending", value: "START_DATE" },
        ]}
      />
      <Button onClick={handleSubmitButtonClick} tabIndex={5}>
        Find
      </Button>
    </form>
  );
};
