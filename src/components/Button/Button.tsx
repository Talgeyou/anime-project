import React from "react";

import styles from "../../styles/Button.module.scss";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
};

export const Button = (props: Props) => {
  const { children, onClick, tabIndex } = props;
  return (
    <button className={styles.button} onClick={onClick} tabIndex={tabIndex}>
      {children}
    </button>
  );
};
