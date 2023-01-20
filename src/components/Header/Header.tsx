import React from "react";
import { Logo } from "../Logo/Logo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Container}>
        <Logo title="Афишер" city="Йошкар-Ола" />
      </div>
    </div>
  );
};
