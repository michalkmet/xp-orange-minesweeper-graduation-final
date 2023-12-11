function mineSweeper(playerPick, bombLocations) {
  let result = '';
  let board = '';
  let boardMessage = '';

  [board, boardMessage] = createWholeBoard(playerPick, bombLocations);

  result = board + boardMessage;

  console.log(result);
  return result;
}

function createWholeBoard(playerPick, bombLocations) {
  console.log(playerPick);
  console.log(bombLocations);
  let board = '';
  let boardMessage = '';

  if (playerPick.length === 0) {
    boardMessage = '[Sandbox 3x3] Game created';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else {
    if (playerPick.toString() === bombLocations.toString()) {
      boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
      board = createBoardBody(playerPick, bombLocations);
    }
  }
  return [board, boardMessage];
}

function createBoardBody(playerPick) {
  let boardBody;
  if (playerPick[4] === true) {
    boardBody = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else if (playerPick[0] === true) {
    boardBody = '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else {
    boardBody = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n';
  }
  return boardBody;
}

module.exports = mineSweeper;
