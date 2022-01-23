import React from "react";
import { Header } from "../Header/Header";

import * as S from "./Layout.styles";

interface Props {
  children?: React.ReactNode;
  search?: string | null;
}

export const Layout = React.memo((props: Props) => {
  const { children, search } = props;
  return (
    <S.Wrapper>
      <Header search={search} />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
});

Layout.displayName = "Layout";
