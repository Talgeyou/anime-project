import React, { useState } from "react";

import styles from "../../styles/Form.module.scss";

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
    <div className={styles["form-field"]}>
      {label ? (
        <label className={styles["form-field__label"]} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className={styles["form-field__input"]}
        id={id}
        value={value}
        onChange={handleChange}
        tabIndex={tabIndex}
      />
    </div>
  );
};
