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
  [drawSymbolArr, boardMessage, autoReveal, boardMessageArr] = iterateThroughBoard(
    boardMessage,
    autoReveal,
    drawSymbolArr,
    boardMessageArr,
    playerPickType,
    playerPick,
    bombLocations,
    bombsAround,
  );
  if (checkIfWon(bombLocations, drawSymbolArr, autoReveal)) {
    boardMessageArr[0] = '[Sandbox 3x3] the land is cleared! GOOD JOB!';
  }
  return drawBoard(drawSymbolArr, boardMessageArr[0]);
}

function iterateThroughBoard(boardMessage, autoReveal, drawSymbolArr, boardMessageArr, playerPickType, playerPick, bombLocations, bombsAround) {
  let boardMessageStr = boardMessage;
  for (let i = 0; i < 9; i++) {
    [drawSymbolArr, boardMessageStr, autoReveal] = drawSymbolAndBoardMessage(
      i,
      drawSymbolArr,
      playerPickType,
      playerPick,
      bombLocations,
      bombsAround,
      autoReveal,
    );
    if (boardMessageStr != '') {
      boardMessageArr.push(boardMessageStr);
    }
  }
  return [drawSymbolArr, boardMessageStr, autoReveal, boardMessageArr];
}

function checkIfWon(bombLocations, drawSymbolArr, autoReveal) {
  let bombsCountTotal = 0;
  let bombsCountInBoardTotal = 0;
  for (let j = 0; j < 9; j++) {
    bombsCountTotal = increaseBombCountTotal(bombLocations[j], bombsCountTotal);
    bombsCountInBoardTotal = increaseBombCountInBoardTotal(drawSymbolArr[j], bombsCountInBoardTotal);
  }
  return determineResult(autoReveal, bombsCountTotal, bombsCountInBoardTotal);
}

function increaseBombCountInBoardTotal(square, bombsCountInBoardTotal) {
  if (square === ' ') {
    bombsCountInBoardTotal++;
  }
  return bombsCountInBoardTotal;
}

function increaseBombCountTotal(square, bombsCountTotal) {
  if (square === true) {
    bombsCountTotal++;
  }
  return bombsCountTotal;
}

function determineResult(autoReveal, bombsCountTotal, bombsCountInBoardTotal) {
  let result = false;
  if (autoRevealAndBombsTotal(autoReveal, bombsCountTotal, bombsCountInBoardTotal) || bombsCountInBoardTotal === 0) {
    result = true;
  }
  return result;
}

function autoRevealAndBombsTotal(autoReveal, bombsCountTotal, bombsCountInBoardTotal) {
  return autoReveal && bombsCountTotal === bombsCountInBoardTotal;
}

function drawSymbolAndBoardMessage(i, drawSymbolArr, playerPickType, playerPick, bombLocations, bombsAround, autoReveal) {
  let drawSymbol = ' ';
  let boardMessage = '';
  if (drawSymbolArr[i] === ' ') {
    drawSymbol = createDrawSymbol(i, playerPick[i], bombLocations[i], bombsAround, playerPickType, autoReveal);
    [drawSymbolArr, autoReveal, boardMessage] = addDrawSymbolAndSetBoardMessage(drawSymbol, drawSymbolArr, i, bombsAround, autoReveal, boardMessage);
    drawSymbolArr[i] = drawSymbol;
  }
  return [drawSymbolArr, boardMessage, autoReveal];
}

function addDrawSymbolAndSetBoardMessage(drawSymbol, drawSymbolArr, i, bombsAround, autoReveal, boardMessage) {
  const bombOrEmptySquare = [' ', '_'];
  if (drawSymbol === '_') {
    drawSymbolArr = revealNeighbors(i, drawSymbolArr, bombsAround);
    autoReveal = true;
  }
  if (!bombOrEmptySquare.includes(drawSymbol)) {
    boardMessage = createBoardMessage(drawSymbol, bombsAround[i]);
  }
  return [drawSymbolArr, autoReveal, boardMessage];
}

function revealNeighbors(i, drawSymbolArr, bombsAround) {
  let checkForCoordinates = coordinatesForBombsCheck[i];
  let coordinatesForCheckArr = [];
  coordinatesForCheckArr.push(...checkForCoordinates);
  let alreadyCheckedSquares = [];
  do {
    let square = coordinatesForCheckArr.shift();
    alreadyCheckedSquares.push(square);
    drawSymbolArr[square] = bombsAround[square];
    coordinatesForCheckArr = coordinatesForCheckArr.concat(coordinatesForBombsCheck[square]);
    coordinatesForCheckArr = coordinatesForCheckArr.filter((item, idx) => coordinatesForCheckArr.indexOf(item) === idx);
  } while (trueCondition(coordinatesForCheckArr, alreadyCheckedSquares));
  return drawSymbolArr;
}

function trueCondition(coordinatesForCheckArr, alreadyCheckedSquares) {
  return coordinatesForCheckArr.length != 0 && alreadyCheckedSquares.length < 9;
}

function createBoardMessage(drawSymbol, bombsAround) {
  let boardMessage = '';
  if (drawSymbol === 'X') {
    boardMessage = '[Sandbox 3x3] BOOM! – Game Over.';
  } else if (drawSymbol === '*') {
    boardMessage = '[Sandbox 3x3] Square flagged as bomb.';
  } else {
    boardMessage = createBombsAroundMessage(bombsAround, drawSymbol);
  }
  return boardMessage;
}

function createBombsAroundMessage(bombsAround, drawSymbol) {
  let bombsStr = bombsAround > 1 ? drawSymbol + ' bombs' : drawSymbol + ' bomb';
  return '[Sandbox 3x3] ' + bombsStr + ' around your square.';
}

function createDrawSymbol(i, playerPick, bombLocation, bombsAround, playerPickType, autoReveal) {
  let drawSymbol = ' ';
  if (playerPick === true) {
    drawSymbol = createDrawSymbolWhenPlayerPick(playerPickType, bombLocation, bombsAround, i);
  } else if (autoReveal === true) {
    drawSymbol = '' + bombsAround[i];
  }
  return drawSymbol;
}

function createDrawSymbolWhenPlayerPick(playerPickType, bombLocation, bombsAround, i) {
  let drawSymbol = ' ';
  if (playerPickType === 'Flag') {
    drawSymbol = '*';
  } else {
    drawSymbol = bombLocation === true ? 'X' : '' + bombsAround[i];
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
  for (let i = 0; i < 9; i++) {
    let checkForCoordinates = coordinatesForBombsCheck[i];
    let bombCount = 0;
    for (let j = 0; j < checkForCoordinates.length; j++) {
      bombCount = increaseBombCount(bombLocations[checkForCoordinates[j]], bombCount);
    }
    bombsAround[i] = createBombCountSymbol(bombCount, bombLocations, i);
  }
  return bombsAround;
}

function increaseBombCount(square, bombCount) {
  if (square === true) {
    bombCount++;
  }
  return bombCount;
}

function createBombCountSymbol(bombCount, bombLocations, i) {
  let bombCountSymbol = '';
  if (bombLocations[i] === true) {
    bombCountSymbol = ' ';
  } else {
    if (bombCount === 0) {
      bombCountSymbol = '_';
    } else {
      bombCountSymbol = bombCount;
    }
  }
  return bombCountSymbol;
}

module.exports = mineSweeper;
