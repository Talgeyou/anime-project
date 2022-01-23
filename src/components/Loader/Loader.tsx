import React from "react";

import * as S from "./Loader.styles";

export const Loader = React.memo(() => {
  return (
    <S.Wrapper>
      <S.Chunk></S.Chunk>
      <S.Chunk></S.Chunk>
      <S.Chunk></S.Chunk>
      <S.Chunk></S.Chunk>
    </S.Wrapper>
  );
});

Loader.displayName = "Loader";
