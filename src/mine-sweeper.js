function mineSweeper(playerPick) {
  let board = '';
  if (playerPick[4] === true) {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
  } else {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created';
  }

  console.log(board);
  return board;
}

module.exports = mineSweeper;
