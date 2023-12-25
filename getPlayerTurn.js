export default function getPlayerTurn(moveCount) {
  return moveCount % 2 === 0 ? 'X' : 'O';
}
