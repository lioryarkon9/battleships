import { EShipType, TBattleship } from "../types/common.types";

export const BATTLE_SHIPS_LAYOUT: Record<string, TBattleship> = {
  "93fb3585-cc25-4839-9bdf-ccd5da11da85": {
    type: EShipType.carrier,
    positions: [
      [2, 9],
      [3, 9],
      [4, 9],
      [5, 9],
      [6, 9],
    ],
    id: "93fb3585-cc25-4839-9bdf-ccd5da11da85",
    hits: 0,
  },
  "2ad79afb-39c0-428b-b600-ef837113865a": {
    type: EShipType.battleship,
    positions: [
      [5, 2],
      [5, 3],
      [5, 4],
      [5, 5],
    ],
    id: "2ad79afb-39c0-428b-b600-ef837113865a",
    hits: 0,
  },
  "738a2d3a-c7ea-43fa-a09f-ec297a327dad": {
    type: EShipType.cruiser,
    positions: [
      [8, 1],
      [8, 2],
      [8, 3],
    ],
    id: "738a2d3a-c7ea-43fa-a09f-ec297a327dad",
    hits: 0,
  },
  "4531cef3-6dfd-42ac-909f-72d495961886": {
    type: EShipType.submarine,
    positions: [
      [3, 0],
      [3, 1],
      [3, 2],
    ],
    id: "4531cef3-6dfd-42ac-909f-72d495961886",
    hits: 0,
  },
  "90a5a7da-62b3-4976-ad5f-dc930e9bbbbe": {
    type: EShipType.destroyer,
    positions: [
      [0, 0],
      [1, 0],
    ],
    id: "90a5a7da-62b3-4976-ad5f-dc930e9bbbbe",
    hits: 0,
  },
};

export const INITIAL_GRID = [
  [
    {
      battleshipId: "90a5a7da-62b3-4976-ad5f-dc930e9bbbbe",
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
  ],
  [
    {
      battleshipId: "90a5a7da-62b3-4976-ad5f-dc930e9bbbbe",
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
  ],
  [
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: "93fb3585-cc25-4839-9bdf-ccd5da11da85",
    },
  ],
  [
    {
      battleshipId: "4531cef3-6dfd-42ac-909f-72d495961886",
    },
    {
      battleshipId: "4531cef3-6dfd-42ac-909f-72d495961886",
    },
    {
      battleshipId: "4531cef3-6dfd-42ac-909f-72d495961886",
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: "93fb3585-cc25-4839-9bdf-ccd5da11da85",
    },
  ],
  [
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: "93fb3585-cc25-4839-9bdf-ccd5da11da85",
    },
  ],
  [
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: "2ad79afb-39c0-428b-b600-ef837113865a",
    },
    {
      battleshipId: "2ad79afb-39c0-428b-b600-ef837113865a",
    },
    {
      battleshipId: "2ad79afb-39c0-428b-b600-ef837113865a",
    },
    {
      battleshipId: "2ad79afb-39c0-428b-b600-ef837113865a",
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: "93fb3585-cc25-4839-9bdf-ccd5da11da85",
    },
  ],
  [
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: "93fb3585-cc25-4839-9bdf-ccd5da11da85",
    },
  ],
  [
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
  ],
  [
    {
      battleshipId: null,
    },
    {
      battleshipId: "738a2d3a-c7ea-43fa-a09f-ec297a327dad",
    },
    {
      battleshipId: "738a2d3a-c7ea-43fa-a09f-ec297a327dad",
    },
    {
      battleshipId: "738a2d3a-c7ea-43fa-a09f-ec297a327dad",
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
  ],
  [
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
    {
      battleshipId: null,
    },
  ],
];
