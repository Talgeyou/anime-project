import React, { useCallback } from "react";
import { URLSearchParamsInit } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

import * as S from "./SearchAnimeForm.styles";

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
      if (sort) {
        newSearchParams.set("sort", sort.toString());
      }
      setSearchParams(newSearchParams);
    },
    [episodes, format, releaseYear, setSearchParams, sort, status]
  );
  return (
    <S.Wrapper>
      <S.Field>
        <S.Label htmlFor={"format"}>Format</S.Label>
        <S.Select
          id={"format"}
          value={format}
          onChange={handleFormatChange}
          tabIndex={5}
        >
          <S.Option value={"TV"}>TV</S.Option>
          <S.Option value={"TV_SHORT"}>Short</S.Option>
          <S.Option value={"SPECIAL"}>Special</S.Option>
          <S.Option value={"OVA"}>OVA</S.Option>
          <S.Option value={"ONA"}>ONA</S.Option>
          <S.Option value={"MUSIC"}>Music</S.Option>
        </S.Select>
      </S.Field>
      <S.Field>
        <S.Label htmlFor={"status"}>Status</S.Label>
        <S.Select
          id={"status"}
          value={status}
          onChange={handleStatusChange}
          tabIndex={5}
        >
          <S.Option value={"FINISHED"}>Finished</S.Option>
          <S.Option value={"RELEASING"}>Ongoing</S.Option>
          <S.Option value={"NOT_YET_RELEASED"}>Announced</S.Option>
          <S.Option value={"CANCELLED"}>Cancelled</S.Option>
          <S.Option value={"HIATUS"}>On Hold</S.Option>
        </S.Select>
      </S.Field>
      <S.Field>
        <S.Label htmlFor={"episodes"}>Episodes</S.Label>
        <S.Input
          id={"episodes"}
          type={"number"}
          min={1}
          step={1}
          value={episodes}
          onChange={handleEpisodesChange}
          tabIndex={5}
        />
      </S.Field>
      <S.Field>
        <S.Label htmlFor={"release-year"}>Release Year</S.Label>
        <S.Input
          id={"release-year"}
          type={"number"}
          min={1}
          step={1}
          value={releaseYear}
          onChange={handleReleaseYearChange}
          tabIndex={5}
        />
      </S.Field>
      <S.Field>
        <S.Label htmlFor={"sort"}>Sort</S.Label>
        <S.Select
          id={"sort"}
          value={sort}
          onChange={handleSortChange}
          tabIndex={5}
        >
          <S.Option value={"SCORE_DESC"}>Score Descending</S.Option>
          <S.Option value={"SCORE"}>Score Ascending</S.Option>
          <S.Option value={"POPULARITY_DESC"}>Popularity Descending</S.Option>
          <S.Option value={"POPULARITY"}>Popularity Ascending</S.Option>
          <S.Option value={"TRENDING_DESC"}>Trending Descending</S.Option>
          <S.Option value={"TRENDING"}>Trending Ascending</S.Option>
          <S.Option value={"START_DATE_DESC"}>Release Date Descending</S.Option>
          <S.Option value={"START_DATE"}>Release Date Ascending</S.Option>
        </S.Select>
      </S.Field>
      <S.Field>
        <S.Button onClick={handleSubmitButtonClick} tabIndex={5}>
          Find
        </S.Button>
      </S.Field>
    </S.Wrapper>
  );
};
