import React from "react";
import { TIcon } from "../../icons";
import { Icon } from "../Icon";

import styles from "./NavButton.module.css";

type Props = {
  icon: TIcon;
  label: string;
};

export const NavButton: React.FC<Props> = ({ icon, label }) => {
  return (
    <div className={styles.NavButton}>
      <Icon name={icon} />
      <span className={styles.Label}>{label}</span>
    </div>
  );
};
