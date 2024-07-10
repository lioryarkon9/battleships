import aircraftIcon from "../assets/Aircraft Shape.png";
import battleshipIcon from "../assets/Battleship Shape.png";
import carrierIcon from "../assets/Carrier Shape.png";
import cruiserIcon from "../assets/Cruiser Shape.png";
import submarineIcon from "../assets/Submarine Shape.png";

import { EShipType } from "../types/common.types";

export const ICON_BY_SHIP_TYPE = {
  [EShipType.battleship]: {
    standard: battleshipIcon,
  },
  [EShipType.carrier]: {
    standard: carrierIcon,
  },
  [EShipType.cruiser]: {
    standard: cruiserIcon,
  },
  [EShipType.submarine]: {
    standard: submarineIcon,
  },
  [EShipType.destroyer]: {
    standard: aircraftIcon,
  },
};
