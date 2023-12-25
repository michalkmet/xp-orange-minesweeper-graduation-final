function mineSweeper(playerPick, bombLocations) {
  let board = '';
  board = createWholeBoard(playerPick, bombLocations);
  console.log(board);
  return board;
}

function createWholeBoard(playerPick, bombLocations) {
  let board = '';
  let boardMessage = '';
  let bombsAround = checkForBombsAround(bombLocations);

  if (playerPick.length === 0) {
    boardMessage = '[Sandbox 3x3] Game created';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n' + boardMessage;
  } else {
    board = createBoardBody(playerPick, bombLocations, bombsAround);
  }
  return board;
}

// function createBoardMessage(playerPick, bombLocations, bombsAround) {
//   let boardMessage = '';
//   if (playerPick.toString() === bombLocations.toString()) {
//     boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
//   } else if (playerPick[0] === true && bombLocations[1] === true) {
//     boardMessage = '[Sandbox 3x3] 1 bomb around your square.';
//   } else if (playerPick[6] === true && bombLocations[3] === false) {
//     boardMessage = '[Sandbox 3x3] 2 bombs around your square.';
//   } else {
//     boardMessage = '[Sandbox 3x3] 3 bombs around your square.';
//   }
//   return boardMessage;
// }

function createBoardBody(playerPick, bombLocations, bombsAround) {
  let boardMessage = '';
  let drawSymbolArr = [];
  for (let i = 0; i < 9; i++) {
    let drawSymbol = ' ';
    if ((playerPick[i] === false) & (bombLocations[i] === false)) {
      drawSymbol = ' ';
    } else if ((playerPick[i] === true) & (bombLocations[i] === true)) {
      drawSymbol = 'X';
      boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
    } else if (playerPick[i] === true) {
      drawSymbol = '' + bombsAround[i];
      let bombsStr = bombsAround[i] > 1 ? bombsAround[i] + ' bombs' : bombsAround[i] + ' bomb';
      boardMessage = '[Sandbox 3x3] ' + bombsStr + ' around your square.';
    }
    drawSymbolArr.push(drawSymbol);
  }

  return drawBoard(drawSymbolArr, boardMessage);
}

function drawBoard(drawSymbolArr, boardMessage) {
  let boardBody = '';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[0] + '|' + drawSymbolArr[1] + '|' + drawSymbolArr[2] + '|\n';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[3] + '|' + drawSymbolArr[4] + '|' + drawSymbolArr[5] + '|\n';
  boardBody += '+-+-+-+\n';
  boardBody += '|' + drawSymbolArr[6] + '|' + drawSymbolArr[7] + '|' + drawSymbolArr[8] + '|\n';
  boardBody += '+-+-+-+\n\n';
  boardBody += boardMessage;
  console.log(boardBody);
  return boardBody;
}

function checkForBombsAround(bombLocations) {
  let bombsAround = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const coordinatesForBombsCheck = {
    0: [1, 3, 4],
    1: [0, 2, 3, 4, 5],
    2: [1, 4, 5],
    3: [0, 1, 4, 6, 7],
    4: [0, 1, 2, 3, 5, 6, 7, 8],
    5: [1, 2, 4, 7, 8],
    6: [3, 4, 7],
    7: [3, 4, 5, 6, 8],
    8: [4, 5, 7],
  };
  for (let i = 0; i < 9; i++) {
    let checkForCoordinates = coordinatesForBombsCheck[i];
    let bombCount = 0;
    for (let j = 0; j < checkForCoordinates.length; j++) {
      if (bombLocations[checkForCoordinates[j]] === true) {
        bombCount++;
      }
    }
    bombsAround[i] = bombCount;
  }
  return bombsAround;
}

module.exports = mineSweeper;
