import React from "react";

import { TCoordinate } from "../../types/common.types";

import { ICON_BY_SHIP_TYPE } from "../../constants/icons.constants";
import { useBattleships } from "../../contexts/useBattleships";

import hitSmallIcon from "../../assets/Hit small.png";
import missSmallIcon from "../../assets/Miss small.png";

import styles from "./Cell.module.css";

type TProps = {
  battleshipId: string | null;
  coordinates: TCoordinate;
};

export function Cell({ battleshipId, coordinates }: TProps): React.JSX.Element {
  const { state, actions } = useBattleships();
  const { shipsLayout, damagedCoordinates, firedUponCoordinates } = state;

  const isFiredUpon = firedUponCoordinates.includes(
    JSON.stringify(coordinates),
  );
  const isDamaged = damagedCoordinates.includes(JSON.stringify(coordinates));
  const isCellStatusIcon = isDamaged || isFiredUpon;

  let shipStatus;
  let destroyedClass = "";

  if (battleshipId) {
    shipStatus = shipsLayout[battleshipId];

    const isDestroyed = shipStatus.positions.every((position) =>
      damagedCoordinates.includes(JSON.stringify(position)),
    );

    if (isDestroyed) {
      destroyedClass = styles.destroyed;
    }
  }

  return (
    <div
      onClick={() => actions.onCellClick({ coordinates, battleshipId })}
      className={`${styles.gridCell} ${destroyedClass}`}
    >
      <div className={styles.section}>
        {shipStatus && isDamaged ? (
          <img
            alt="ship_icon"
            className={styles.shipIcon}
            src={ICON_BY_SHIP_TYPE[shipStatus.type].standard}
          />
        ) : null}
      </div>

      <div className={styles.section}>
        {isCellStatusIcon && (
          <img
            alt="status_icon"
            className={styles.statusIcon}
            src={isDamaged ? hitSmallIcon : missSmallIcon}
          />
        )}
      </div>
    </div>
  );
}
