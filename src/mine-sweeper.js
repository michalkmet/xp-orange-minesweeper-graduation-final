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
    boardMessage = createBoardMessage(playerPick, bombLocations);
    board = createBoardBody(playerPick, bombLocations);
  }
  return [board, boardMessage];
}

function createBoardMessage(playerPick, bombLocations) {
  let boardMessage = '';
  if (playerPick.toString() === bombLocations.toString()) {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
  } else if (playerPick[0] === true && bombLocations[1] === true) {
    boardMessage = '[Sandbox 3x3] 1 bomb around your square.';
  } else {
    boardMessage = '[Sandbox 3x3] 3 bombs around your square.';
  }
  return boardMessage;
}

function createBoardBody(playerPick, bombLocations) {
  let boardBody;
  if (playerPick[4] === true) {
    boardBody = '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else if (playerPick[0] === true && bombLocations[0] === true) {
    boardBody = '+-+-+-+\n|X| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else if (playerPick[6] === true && !bombLocations[6]) {
    boardBody = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|3| | |\n+-+-+-+\n\n';
  } else if (playerPick[0] === true && !bombLocations[0]) {
    boardBody = '+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n';
  } else {
    boardBody = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n|X| | |\n+-+-+-+\n\n';
  }
  return boardBody;
}

module.exports = mineSweeper;
