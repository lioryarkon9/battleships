import React from "react";

import { TContextValue } from "../types/common.types";

import { getNextStep } from "../utils/common.utils";
import { INITIAL_STATE, reducer } from "./battleships.reducer";

const BattleshipsContext = React.createContext<TContextValue>({
  state: INITIAL_STATE,
  actions: {},
});

type TProps = {
  children: React.JSX.Element;
};

export function BattleshipsProvider({ children }: TProps) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);
  const { battleZone, firedUponCoordinates, damagedCoordinates } = state;

  const fire = () => {
    const { damagedShip, coordinates } = getNextStep({
      battleZone,
      firedUponCoordinates,
      damagedCoordinates,
    });

    if (damagedShip) {
      dispatch({ type: "SET_DAMAGED_SHIPS", payload: { damagedShip } });
    } else {
      dispatch({ type: "SET_FIRED_SHIPS", payload: { coordinates } });
    }
  };

  const value = {
    state,
    actions: {
      fire,
    },
  };

  return (
    <BattleshipsContext.Provider value={value}>
      {children}
    </BattleshipsContext.Provider>
  );
}

export const useBattleships = () => React.useContext(BattleshipsContext);
