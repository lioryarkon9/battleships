import React from "react";

import styles from "./GemeOver.module.css";

export function GameOver(): React.JSX.Element {
  return (
    <div className={styles.gameOverContainer}>
      <h1 className={styles.gameOverText}>Game Over</h1>
    </div>
  );
}
