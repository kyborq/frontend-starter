import React from "react";

import styles from "./Logo.module.css";

type Props = {
  title: string;
  city?: string;
};

export const Logo: React.FC<Props> = ({ title, city }) => {
  return (
    <div className={styles.Logo}>
      <h1 className={styles.Title}>{title}</h1>
      {!!city && <span className={styles.City}>{city}</span>}
    </div>
  );
};
