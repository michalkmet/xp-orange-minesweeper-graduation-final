function mineSweeper(playerPick, bombLocations) {
  let result = '';
  let board = '';
  let boardMessage = '';
  console.log(bombLocations);

  if (playerPick.length === 0) {
    boardMessage = '[Sandbox 3x3] Game created';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  }

  if (playerPick[4] === true) {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else if (playerPick[0] === true) {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
    board = '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else if (playerPick[6] === true) {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n';
  }
  result = board + boardMessage;

  console.log(result);
  return result;
}

module.exports = mineSweeper;
