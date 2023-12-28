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

function mineSweeper(playerMove, bombLocations, previousBoard = []) {
  let board = '';
  let drawSymbolArr = [];
  let playerPick = playerMove.playerPick;
  let playerPickType = playerMove.playerPickType;
  [board, drawSymbolArr] = createWholeBoard(playerPick, bombLocations, playerPickType, previousBoard);
  console.log(board);
  return [board, drawSymbolArr];
}

function createWholeBoard(playerPick, bombLocations, playerPickType, previousBoard) {
  let board = '';
  let boardMessage = '';
  let drawSymbolArr = [];
  let bombsAround = checkForBombsAround(bombLocations);

  if (playerPick.includes(true) === false) {
    boardMessage = '[Sandbox 3x3] Game created';
    board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n\n' + boardMessage;
  } else {
    [board, drawSymbolArr] = createBoardBody(playerPickType, playerPick, bombLocations, bombsAround, previousBoard);
  }
  return [board, drawSymbolArr];
}

function createBoardBody(playerPickType, playerPick, bombLocations, bombsAround, previousBoard) {
  let boardMessage = '';
  let emptyBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  let boardMessageArr = [];
  let autoReveal = false;
  let drawSymbolArr = previousBoard.length === 0 ? emptyBoard : previousBoard;
  for (let i = 0; i < 9; i++) {
    [drawSymbolArr, boardMessage, autoReveal] = drawSymbolAndBoardMessage(i, drawSymbolArr, playerPickType, playerPick, bombLocations, bombsAround, autoReveal);
    if (boardMessage != '') {
      boardMessageArr.push(boardMessage);
    }
  }
  if (checkIfWon(bombLocations, drawSymbolArr, autoReveal)) {
    boardMessageArr[0] = '[Sandbox 3x3] the land is cleared! GOOD JOB!';
  }
  return drawBoard(drawSymbolArr, boardMessageArr[0], autoReveal);
}

function checkIfWon(bombLocations, drawSymbolArr, autoReveal) {
  let result = false;
  let bombsCountTotal = 0;
  let bombsCountInBoardTotal = 0;
  for (let j = 0; j < 9; j++) {
    if (bombLocations[j] === true) {
      bombsCountTotal++;
    }
    if (drawSymbolArr[j] === ' ') {
      bombsCountInBoardTotal++;
    }
  }
  if ((autoReveal && bombsCountTotal === bombsCountInBoardTotal) || bombsCountInBoardTotal === 0) {
    result = true;
  }
  return result;
}

function drawSymbolAndBoardMessage(i, drawSymbolArr, playerPickType, playerPick, bombLocations, bombsAround, autoReveal) {
  let drawSymbol = ' ';
  let boardMessage = '';
  if (drawSymbolArr[i] === ' ') {
    drawSymbol = createDrawSymbol(i, playerPick[i], bombLocations[i], bombsAround, playerPickType, autoReveal);
    if (drawSymbol === '_') {
      drawSymbolArr = revealNeighbors(i, drawSymbolArr, bombsAround);
      autoReveal = true;
    }
    if (drawSymbol != ' ' && drawSymbol != '_') {
      boardMessage = createBoardMessage(drawSymbol, bombsAround[i]);
    }
    drawSymbolArr[i] = drawSymbol;
  }
  return [drawSymbolArr, boardMessage, autoReveal];
}

function revealNeighbors(i, drawSymbolArr, bombsAround) {
  // TODO we need to find the way how to do it recursively
  let checkForCoordinates = coordinatesForBombsCheck[i];
  for (let j = 0; j < checkForCoordinates.length; j++) {
    drawSymbolArr[checkForCoordinates[j]] = bombsAround[checkForCoordinates[j]];
  }
  return drawSymbolArr;
}

function createBoardMessage(drawSymbol, bombsAround) {
  let boardMessage = '';
  if (drawSymbol === 'X') {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
  } else if (drawSymbol === '*') {
    boardMessage = '[Sandbox 3x3] Square flagged as bomb.';
  } else {
    let bombsStr = bombsAround > 1 ? drawSymbol + ' bombs' : drawSymbol + ' bomb';
    boardMessage = '[Sandbox 3x3] ' + bombsStr + ' around your square.';
  }
  return boardMessage;
}

function createDrawSymbol(i, playerPick, bombLocation, bombsAround, playerPickType, autoReveal) {
  let drawSymbol = ' ';
  if (playerPick === true) {
    if (playerPickType === 'Flag') {
      drawSymbol = '*';
    } else {
      drawSymbol = bombLocation === true ? 'X' : '' + bombsAround[i];
    }
  } else if (autoReveal === true) {
    drawSymbol = '' + bombsAround[i];
  }
  return drawSymbol;
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
  return [boardBody, drawSymbolArr];
}

function checkForBombsAround(bombLocations) {
  let bombsAround = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let bombCountSymbol = '';
  for (let i = 0; i < 9; i++) {
    let checkForCoordinates = coordinatesForBombsCheck[i];
    let bombCount = 0;
    for (let j = 0; j < checkForCoordinates.length; j++) {
      if (bombLocations[checkForCoordinates[j]] === true) {
        bombCount++;
      }
    }

    if (bombLocations[i] === true) {
      bombCountSymbol = ' ';
    } else {
      if (bombCount === 0) {
        bombCountSymbol = '_';
      } else {
        bombCountSymbol = bombCount;
      }
    }
    bombsAround[i] = bombCountSymbol;
  }
  return bombsAround;
}

module.exports = mineSweeper;
