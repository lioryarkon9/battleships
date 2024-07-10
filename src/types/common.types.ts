export type TCoordinate = Array<number>;

export enum EShipType {
  carrier = "carrier",
  battleship = "battleship",
  cruiser = "cruiser",
  submarine = "submarine",
  destroyer = "destroyer",
}

type TGridShip = {
  battleshipId: null | string;
};

type TGridShipRow = Array<TGridShip>;

export type TBattleship = {
  type: EShipType;
  positions: Array<TCoordinate>;
  id: string;
  hits: number;
};

export type TBattleshipsState = {
  shipsLayout: Record<string, TBattleship>;
  firedUponCoordinates: Array<string>;
  damagedCoordinates: Array<string>;
  battleZone: Array<TGridShipRow>;
};

export type TAction = { type: string; payload?: Record<string, any> };

export type TContextValue = {
  state: TBattleshipsState;
  actions: Record<string, any>;
};
