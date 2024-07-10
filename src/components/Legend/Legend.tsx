import React from "react";

import { useBattleships } from "../../contexts/useBattleships";

import { LegendShip } from "../LegendShip/LegendShip";

import styles from "./Legend.module.css";

export function Legend(): React.JSX.Element {
  const { state } = useBattleships();
  const { shipsLayout } = state;

  return (
    <div className={styles.container}>
      {Object.values(shipsLayout).map(({ id, type, hits, positions }) => (
        <LegendShip
          key={id}
          id={id}
          type={type}
          hits={hits}
          positions={positions}
        />
      ))}
    </div>
  );
}
