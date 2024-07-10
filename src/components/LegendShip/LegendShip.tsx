import React from "react";

import { TBattleship } from "../../types/common.types";

import styles from "./LegendShip.module.css";

export function LegendShip({
  id,
  type,
  hits,
  positions,
}: TBattleship): React.JSX.Element {
  let status: null | "hit" | "sunk" = null;

  if (hits > 0) {
    status = "hit";
  }

  if (hits >= positions.length) {
    status = "sunk";
  }

  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <tr>
            <td>Type:</td>
            <td>{type}</td>
          </tr>
          <tr className={styles.positions}>
            <td>Position:</td>
            <td>{JSON.stringify(positions)}</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td className={status ? styles[status] : ""}>{status ?? "OK"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
