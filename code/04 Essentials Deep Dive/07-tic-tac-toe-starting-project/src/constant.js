export const WIN_COMBINATIONS = [
  [
    {row: 0, column: 0},
    {row: 0, column: 1},
    {row: 0, column: 2},
  ],
  [
    {row: 1, column: 0},
    {row: 1, column: 1},
    {row: 1, column: 2},
  ],
  [
    {row: 2, column: 0},
    {row: 2, column: 1},
    {row: 2, column: 2},
  ],
  [
    {row: 0, column: 0},
    {row: 1, column: 0},
    {row: 2, column: 0},
  ],
  [
    {row: 0, column: 1},
    {row: 1, column: 1},
    {row: 2, column: 1},
  ],
  [
    {row: 0, column: 2},
    {row: 1, column: 2},
    {row: 2, column: 2},
  ],
  [
    {row: 0, column: 0},
    {row: 1, column: 1},
    {row: 2, column: 2},
  ],
  [
    {row: 0, column: 2},
    {row: 1, column: 1},
    {row: 2, column: 0},
  ],
];

export const SYMBOL = {
  X: "X",
  O: "O"
}

export const PLAYER = {
  X: "Player 1",
  O: "Player 2"
}

export const INIT_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export const MAX_LENGTH = 9;
