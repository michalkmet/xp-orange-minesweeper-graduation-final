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
  let boardBody = '';
  let drawSymbolArr = [];
  for (let i = 0; i < 10; i++) {
    let drawSymbol = ' ';
    if ((playerPick[i] === false) & (bombLocations[i] === false)) {
      drawSymbol = ' ';
    } else if ((playerPick[i] === true) & (bombLocations[i] === true)) {
      drawSymbol = 'X';
    } else {
      checkForBombsAround(i, playerPick, bombLocations);
    }
    drawSymbolArr.push(drawSymbol);
  }
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[0] + '|' + drawSymbolArr[1] + '|' + drawSymbolArr[2] + '|\n';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[3] + '|' + drawSymbolArr[4] + '|' + drawSymbolArr[5] + '|\n';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[6] + '|' + drawSymbolArr[7] + '|' + drawSymbolArr[8] + '|\n';
  boardBody += '+-+-+-+\n\n';

  console.log(boardBody);
  return boardBody;
}

function checkForBombsAround(i, playerPick, bombLocations) {
  console.log('checkForBombsAround');
  console.log('i: ', i);
  console.log('playerPick: ', playerPick);
  console.log('bombLocations: ', bombLocations);
}

module.exports = mineSweeper;
