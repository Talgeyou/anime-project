import React from "react";

import * as S from "./Button.styles";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
};

export const Button = (props: Props) => {
  const { children, onClick, tabIndex } = props;
  return (
    <S.Wrapper>
      <S.Button onClick={onClick} tabIndex={tabIndex}>
        {children}
      </S.Button>
    </S.Wrapper>
  );
};
