import {
  BATTLE_SHIPS_LAYOUT,
  INITIAL_GRID,
} from "../constants/common.constants";
import { TAction, TBattleshipsState } from "../types/common.types";

export const INITIAL_STATE: TBattleshipsState = {
  shipsLayout: BATTLE_SHIPS_LAYOUT,
  firedUponCoordinates: [],
  damagedCoordinates: [],
  battleZone: INITIAL_GRID,
};

export function reducer(
  state: TBattleshipsState,
  action: TAction,
): TBattleshipsState {
  switch (action.type) {
    case "SET_DAMAGED_SHIPS": {
      const { damagedShip } = action.payload!;

      let updatedShipsLayout = { ...state.shipsLayout };
      let updatedDamagedCoordinates = [...state.damagedCoordinates];

      updatedShipsLayout[damagedShip.id].hits++;
      updatedDamagedCoordinates.push(JSON.stringify(damagedShip.coordinates));

      return {
        ...state,
        shipsLayout: updatedShipsLayout,
        damagedCoordinates: updatedDamagedCoordinates,
      };
    }
    case "SET_FIRED_SHIPS": {
      const { coordinates } = action.payload!;

      return {
        ...state,
        firedUponCoordinates: [
          ...state.firedUponCoordinates,
          JSON.stringify(coordinates),
        ],
      };
    }
    default:
      return state;
  }
}
