import React from "react";
import { Header } from "./components/Header/Header";

import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Sidebar}></div>
        <div className={styles.Content}></div>
      </div>
    </div>
  );
};

export default App;
