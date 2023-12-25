const DIR = [
  [1, 0], // down
  [0, 1], // right
  [1, 1], // down + right
  [1, -1], // down + left
];

export default function calculateTicTacToe(board) {
  const n = board.length;
  let hasEmptyCells = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const player = board[i][j];
      if (player == null) {
        hasEmptyCells = true;
        continue;
      }

      for (const [di, dj] of DIR) {
        let count = 1;
        let ci = i;
        let cj = j;
        while (true) {
          ci += di;
          cj += dj;
          if (
            ci < 0 ||
            ci >= n ||
            cj < 0 ||
            cj >= n ||
            board[ci][cj] !== player
          ) {
            break;
          }
          count++;
        }
        if (count >= n) {
          return { isGameOver: true, winner: player };
        }
      }
    }
  }

  return { isGameOver: !hasEmptyCells, winner: null };
}
