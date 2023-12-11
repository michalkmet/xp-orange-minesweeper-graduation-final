function mineSweeper(playerPick, bombLocations) {
  let board = '';
  console.log(bombLocations);
  if (playerPick[4] === true) {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
  } else if (playerPick[0] === true) {
    board = '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] BOOM! – Game Over.';
  } else {
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n[Sandbox 3x3] Game created';
  }

  console.log(board);
  return board;
}

module.exports = mineSweeper;
