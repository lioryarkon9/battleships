import {
  TBattleship,
  TBattleshipsState,
  TCoordinate,
} from "../types/common.types";

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

function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCoordinates(): Array<number> {
  return [getRandomInteger(0, 9), getRandomInteger(0, 9)];
}

type TGetNextStepProps = Pick<
  TBattleshipsState,
  "battleZone" | "damagedCoordinates" | "firedUponCoordinates"
>;

type TGetNextStepReturnType = {
  damagedShip?: {
    id: TBattleship["id"];
  };
  coordinates: TCoordinate;
};

export function getNextStep({
  battleZone,
  firedUponCoordinates,
  damagedCoordinates,
}: TGetNextStepProps): TGetNextStepReturnType {
  let damagedShip;
  let randomCoordinates = getRandomCoordinates();

  while (
    [...firedUponCoordinates, ...damagedCoordinates].includes(
      JSON.stringify(randomCoordinates),
    )
  ) {
    randomCoordinates = getRandomCoordinates();
  }

  battleZone.forEach((column, xCoordinate) => {
    const [targetXCoordinate, targetYCoordinate] = randomCoordinates;

    if (xCoordinate !== targetXCoordinate) {
      return;
    }

    column.forEach((cell, yCoordinate) => {
      if (yCoordinate !== targetYCoordinate) {
        return;
      }

      const damagedShipId = cell.battleshipId;

      if (damagedShipId) {
        damagedShip = {
          id: damagedShipId,
          coordinates: randomCoordinates,
        };

        return;
      }
    });
  });

  return { damagedShip: damagedShip, coordinates: randomCoordinates };
}
