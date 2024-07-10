import React from "react";

import { getIsGameOver } from "../../utils/common.utils";
import { useBattleships } from "../../contexts/useBattleships";

import { Cell } from "../Cell/Cell";
import { GameOver } from "../GameOver/GameOver";

import styles from "./FightingWater.module.css";

export function FightingWater(): React.JSX.Element {
  const { state } = useBattleships();
  const { battleZone, shipsLayout, damagedCoordinates } = state;

  const isGameOver = getIsGameOver(shipsLayout, damagedCoordinates);

  if (isGameOver) {
    return <GameOver />;
  }

  return (
    <div className={styles.gridContainer}>
      {battleZone.map((column, columnIndex) => (
        <div key={`row_${columnIndex}`} className={styles.gridColumn}>
          {column.map((cell, cellIndex) => (
            <Cell
              key={JSON.stringify([columnIndex, cellIndex])}
              coordinates={[columnIndex, cellIndex]}
              battleshipId={cell.battleshipId}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
