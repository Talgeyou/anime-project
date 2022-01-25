import React from "react";

import styles from "./Loader.module.scss";

export const Loader = React.memo(() => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__chunk}></div>
      <div className={styles.loader__chunk}></div>
      <div className={styles.loader__chunk}></div>
      <div className={styles.loader__chunk}></div>
    </div>
  );
});

Loader.displayName = "Loader";
