import React from "react";

import { TContextValue, TOnCellClickProps } from "../types/common.types";

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
  const { shipsLayout } = state;

  const onCellClick = ({ coordinates, battleshipId }: TOnCellClickProps) => {
    if (battleshipId) {
      dispatch({
        type: "SET_DAMAGED_SHIP",
        payload: {
          battleshipId,
          coordinates,
          hits: shipsLayout[battleshipId].hits + 1,
        },
      });
    } else {
      dispatch({ type: "SET_FIRED_UPON_CELL", payload: { coordinates } });
    }
  };

  const value = {
    state,
    actions: {
      onCellClick,
    },
  };

  return (
    <BattleshipsContext.Provider value={value}>
      {children}
    </BattleshipsContext.Provider>
  );
}

export const useBattleships = () => React.useContext(BattleshipsContext);
