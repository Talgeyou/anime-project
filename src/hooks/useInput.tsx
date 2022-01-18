import React, { useCallback, useState } from "react";

export const useInput = (
  initialValue: number | string
): [
  string | number,
  (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(
    typeof initialValue === "number"
      ? (initialValue as number)
      : (initialValue as string)
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      if (
        event &&
        event.currentTarget &&
        event.currentTarget.value !== undefined
      ) {
        setValue(event.currentTarget.value);
      }
    },
    []
  );

  return [
    typeof initialValue === "string" ? (value as string) : (value as number),
    handleChange,
  ];
};
