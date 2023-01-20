import React from "react";
import { Icon } from "../Icon";
import { Logo } from "../Logo/Logo";
import { NavButton } from "../NavButton/NavButton";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Container}>
        <Logo title="Афишер" city="Йошкар-Ола" />

        <div style={{ display: "flex" }}>
          <NavButton icon="home" label="Главная" />
          <NavButton icon="search" label="Поиск" />
          <NavButton icon="calendar" label="Календарь" />
          <NavButton icon="bell" label="Уведомления" />
          <NavButton icon="user" label="Гость" />
        </div>
      </div>
    </div>
  );
};
