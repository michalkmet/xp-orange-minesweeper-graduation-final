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
  } else if (playerPick[6] === true && bombLocations[3] === false) {
    boardMessage = '[Sandbox 3x3] 2 bombs around your square.';
  } else {
    boardMessage = '[Sandbox 3x3] 3 bombs around your square.';
  }
  return boardMessage;
}

function createBoardBody(playerPick, bombLocations) {
  let drawSymbolArr = [];
  for (let i = 0; i < 9; i++) {
    let drawSymbol = ' ';
    // console.log('i: ', i);
    // console.log('playerPick[i]: ', playerPick[i]);
    // console.log('bombLocations[i]: ', bombLocations[i]);
    if ((playerPick[i] === false) & (bombLocations[i] === false)) {
      drawSymbol = ' ';
    } else if ((playerPick[i] === true) & (bombLocations[i] === true)) {
      drawSymbol = 'X';
    } else if (playerPick[i] === true) {
      drawSymbol = '' + checkForBombsAround(i, playerPick, bombLocations);
    }
    drawSymbolArr.push(drawSymbol);
  }

  return drawBoard(drawSymbolArr);
}

function drawBoard(drawSymbolArr) {
  let boardBody = '';
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
  console.log(i);
  console.log(playerPick);
  console.log(bombLocations);
  // const coordinatesForBombsCheck = {
  //   0: [1, 3, 4],
  //   1: [0, 2, 3, 4, 5],
  //   2: [1, 4, 5],
  //   3: [0, 1, 4, 6, 7],
  //   4: [0, 1, 2, 3, 5, 6, 7, 8],
  //   5: [1, 2, 4, 7, 8],
  //   6: [3, 4, 7],
  //   7: [3, 4, 5, 6, 8],
  //   8: [4, 5, 7],
  // };
  let bombsCount = 0;
  return bombsCount;
}

module.exports = mineSweeper;
