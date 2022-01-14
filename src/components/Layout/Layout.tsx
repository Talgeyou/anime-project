import React from "react";
import { Header } from "../Header/Header";

import * as S from "./Layout.styles";

interface Props {
  children?: React.ReactNode;
}

export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  );
};
