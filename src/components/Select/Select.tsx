import React, { useState } from "react";

import * as S from "./Select.styles";

type Props = {
  id?: string;
  initialValue: string | number;
  label?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options: { label: string; value: string | number }[];
  tabIndex?: number;
};

export const Select = (props: Props) => {
  const { id, initialValue, label, onChange, options, tabIndex } = props;
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <S.Wrapper>
      {label ? <S.Label htmlFor={id}>{label}</S.Label> : null}
      <S.Select value={value} onChange={handleChange} tabIndex={tabIndex}>
        {options.map((option: { label: string; value: string | number }) => (
          <S.Option value={option.value}>{option.label}</S.Option>
        ))}
      </S.Select>
    </S.Wrapper>
  );
};
