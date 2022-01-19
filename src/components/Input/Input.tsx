import React, { useState } from "react";

import * as S from "./Input.styles";

type Props = {
  id?: string;
  initialValue?: string | number;
  number?: boolean;
  label?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  tabIndex?: number;
};

export const Input = (props: Props) => {
  const { initialValue, number, label, onChange, id, tabIndex } = props;
  const [value, setValue] = useState(
    number ? (initialValue as number) : (initialValue as string)
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(number ? newValue : (newValue as string));
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <S.Wrapper>
      {label ? <S.Label htmlFor={id}>{label}</S.Label> : null}
      <S.Input
        id={id}
        value={value}
        onChange={handleChange}
        tabIndex={tabIndex}
      />
    </S.Wrapper>
  );
};
