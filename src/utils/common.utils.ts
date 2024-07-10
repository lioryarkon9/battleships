import { TBattleshipsState } from "../types/common.types";

export function getIsGameOver(
  shipsLayout: TBattleshipsState["shipsLayout"],
  damagedCoordinates: TBattleshipsState["damagedCoordinates"],
): boolean {
  let isGameOver = true;

  const allShipsPositions = Object.values(shipsLayout).flatMap(
    (battleship) => battleship.positions,
  );

  allShipsPositions.forEach((shipPosition) => {
    if (!damagedCoordinates.includes(JSON.stringify(shipPosition))) {
      isGameOver = false;

      return;
    }
  });

  return isGameOver;
}
