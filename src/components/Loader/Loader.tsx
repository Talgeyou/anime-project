import React from "react";

import * as S from "./Loader.styles";

interface Props {}

export const Loader = (props: Props) => {
  return (
    <S.Wrapper>
      <S.Chunk></S.Chunk>
      <S.Chunk></S.Chunk>
      <S.Chunk></S.Chunk>
      <S.Chunk></S.Chunk>
    </S.Wrapper>
  );
};
