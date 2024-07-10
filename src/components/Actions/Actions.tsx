import React from "react";

import { getIsGameOver } from "../../utils/common.utils";
import { useBattleships } from "../../contexts/useBattleships";

import { Button } from "../Button/Button";

export function Actions(): React.JSX.Element {
  const { actions, state } = useBattleships();
  const { shipsLayout, damagedCoordinates } = state;

  const isGameOver = getIsGameOver(shipsLayout, damagedCoordinates);

  return <Button label="Fire" onClick={actions.fire} isEnabled={!isGameOver} />;
}
