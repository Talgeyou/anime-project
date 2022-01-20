import React, { useCallback, useState } from "react";

export const useInput = (
  initialValue?: number | string
): [
  string | number | undefined,
  (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
] => {
  const [value, setValue] = useState(initialValue);

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

  return [value, handleChange];
};
