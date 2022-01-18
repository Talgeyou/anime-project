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
  const [format, handleFormatChange] = useInput(oldFormat ? oldFormat : "TV");
  const [status, handleStatusChange] = useInput(
    oldStatus ? oldStatus : "FINISHED"
  );
  const [episodes, handleEpisodesChange] = useInput(
    oldEpisodes && +oldEpisodes > 0 ? +oldEpisodes : ""
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
      setSearchParams(newSearchParams);
    },
    [episodes, format, setSearchParams, status]
  );
  return (
    <S.Wrapper>
      <S.Field>
        <S.Label htmlFor={"format"}>Format</S.Label>
        <S.Select id={"format"} value={format} onChange={handleFormatChange}>
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
        <S.Select id={"status"} value={status} onChange={handleStatusChange}>
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
        />
      </S.Field>
      <S.Field>
        <S.Button onClick={handleSubmitButtonClick}>Find</S.Button>
      </S.Field>
    </S.Wrapper>
  );
};
