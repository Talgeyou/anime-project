import React, { useState } from "react";

import styles from "../../styles/Form.module.scss";

type Props = {
  id?: string;
  initialValue?: string | number;
  label?: React.ReactNode;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options: { label: string; value?: string | number }[];
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
    <div className={styles["form-field"]}>
      {label ? (
        <label className={styles["form-field__label"]} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <select
        className={styles["form-field__select"]}
        value={value}
        onChange={handleChange}
        tabIndex={tabIndex}
      >
        {options.map((option: { label: string; value?: string | number }) => (
          <option
            className={styles["form-field__option"]}
            key={option.label}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
